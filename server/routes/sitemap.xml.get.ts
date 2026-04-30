import { readFileSync } from "node:fs";
import { join } from "node:path";
import { defineEventHandler, setHeader } from "h3";
import { useRuntimeConfig } from "nitropack/runtime";

const STRAPI_DEFAULT = "https://dicapta-strapi-app-production.up.railway.app/api";

const STATIC_PATHS = [
  "/",
  "/about",
  "/about/contact-us",
  "/about/mission",
  "/about/our-partners",
  "/news",
  "/news/newsletters",
  "/news/press",
  "/news/blog",
  "/news/new-releases",
  "/projects",
  "/projects/previous-projects",
  "/projects/tv-movie-access",
  "/projects/all4access",
  "/projects/all4voicing-lite",
  "/resources",
  "/resources/accessibility-tips",
  "/resources/case-studies",
  "/resources/case-study-article",
  "/resources/information-sheets",
  "/resources/enh-access",
  "/resources/white-paper-article",
  "/resources/white-papers",
  "/privacy-policy",
  "/terms-and-conditions",
  "/services",
  "/services/audio-description",
  "/services/captioning",
  "/services/consulting",
  "/services/media-production",
  "/services/multilingual-dubbing",
];

function escapeXml(url: string) {
  return url
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function xmlUrl(loc: string) {
  return `  <url><loc>${escapeXml(loc)}</loc></url>`;
}

async function fetchAllStrapi(
  apiBase: string,
  resource: string,
  idField: "documentId" | "id",
): Promise<string[]> {
  const ids = new Set<string>();
  let page = 1;
  const pageSize = 100;
  while (page < 500) {
    const url = new URL(`${apiBase}/${resource}`);
    url.searchParams.set("populate", "*");
    url.searchParams.set("pagination[page]", String(page));
    url.searchParams.set("pagination[pageSize]", String(pageSize));
    const res = await fetch(url.toString());
    if (!res.ok) break;
    const json = await res.json();
    const data = json?.data;
    if (!Array.isArray(data) || data.length === 0) break;
    for (const item of data) {
      const raw = idField === "documentId" ? item.documentId : item.id;
      if (raw != null && raw !== "") ids.add(String(raw));
    }
    if (data.length < pageSize) break;
    page += 1;
  }
  return [...ids];
}

function readMockIds(relativeFile: string, key: string, idKey: string): string[] {
  const path = join(process.cwd(), "assets", "mocked", relativeFile);
  const raw = readFileSync(path, "utf-8");
  const parsed = JSON.parse(raw) as Record<string, { id?: number }[]>;
  const list = parsed[key];
  if (!Array.isArray(list)) return [];
  return list
    .map((row) => row[idKey as "id"])
    .filter((id): id is number => typeof id === "number")
    .map(String);
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = (config.public.siteUrl as string).replace(/\/$/, "");
  const apiBase = (config.strapiApiUrl as string | undefined)?.replace(/\/$/, "") || STRAPI_DEFAULT;

  const paths = new Set<string>(STATIC_PATHS);

  for (const id of readMockIds("informationSheetsMocked.json", "sheets", "id")) {
    paths.add(`/resources/information-sheets/${id}`);
  }
  for (const id of readMockIds("accessibilityTipsMocked.json", "articles", "id")) {
    paths.add(`/resources/accessibility-tips/${id}`);
  }

  try {
    const [enhIds, blogIds, releaseIds] = await Promise.all([
      fetchAllStrapi(apiBase, "enh-accesses", "documentId"),
      fetchAllStrapi(apiBase, "blogs", "documentId"),
      fetchAllStrapi(apiBase, "new-releases", "documentId"),
    ]);
    for (const id of enhIds) paths.add(`/resources/enh-access/${id}`);
    for (const id of blogIds) paths.add(`/news/blog/${id}`);
    for (const id of releaseIds) paths.add(`/news/new-releases/${id}`);
  } catch {
    // Strapi unavailable: still serve static + mock URLs
  }

  const sorted = [...paths].sort((a, b) => a.localeCompare(b));
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sorted.map((p) => xmlUrl(`${siteUrl}${p}`)),
    "</urlset>",
  ].join("\n");

  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return body;
});
