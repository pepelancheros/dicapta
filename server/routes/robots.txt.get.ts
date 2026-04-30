import { defineEventHandler, setHeader } from "h3";
import { useRuntimeConfig } from "nitropack/runtime";

export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public;
  const origin = String(siteUrl).replace(/\/$/, "");
  const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;
  setHeader(event, "Content-Type", "text/plain; charset=utf-8");
  return robots;
});
