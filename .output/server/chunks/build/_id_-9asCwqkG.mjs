import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/assets/images/ad-black.webp");
const _imports_1 = publicAssetsURL("/assets/images/cc-black.webp");
const _imports_2 = publicAssetsURL("/assets/images/asl-black.webp");
const _imports_3 = publicAssetsURL("/assets/images/a4a-black.webp");
const _imports_4 = publicAssetsURL("/assets/images/material-icons/play-circle.svg");
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const currentRelease = ref({});
    const accessibilityOptions = computed(() => {
      const options = [
        currentRelease.AD && "Audio Description",
        currentRelease.CC && "Closed Captions",
        currentRelease.ASL && "American Sign Language"
      ].filter(Boolean);
      return options.length === 0 ? "None" : options.length === 1 ? options[0] : options.length === 2 ? options.join(" and ") : options.slice(0, -1).join(", ") + " and " + options[options.length - 1];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "new-release" }, _attrs))} data-v-75c148a8><div class="new-release__header" data-v-75c148a8><h2 data-v-75c148a8>New Accessibility Releases</h2></div><div class="new-release__content" data-v-75c148a8><h1 class="new-release__title" data-v-75c148a8>${ssrInterpolate(currentRelease.value.title)}</h1><img class="new-release__img"${ssrRenderAttr("src", currentRelease.value.imageUrl)}${ssrRenderAttr("alt", currentRelease.value.altText)} data-v-75c148a8><div class="new-release__info" data-v-75c148a8><div class="new-release__accessibility-logos-container" data-v-75c148a8>`);
      if (currentRelease.value.AD) {
        _push(`<img class="new-release__accessibility-logos"${ssrRenderAttr("src", _imports_0)} alt="audio description logo" data-v-75c148a8>`);
      } else {
        _push(`<!---->`);
      }
      if (currentRelease.value.CC) {
        _push(`<img class="new-release__accessibility-logos new-release__accessibility-logos--closed-captions"${ssrRenderAttr("src", _imports_1)} alt="closed caption logo" data-v-75c148a8>`);
      } else {
        _push(`<!---->`);
      }
      if (currentRelease.value.ASL) {
        _push(`<img class="new-release__accessibility-logos"${ssrRenderAttr("src", _imports_2)} alt="american sign language logo" data-v-75c148a8>`);
      } else {
        _push(`<!---->`);
      }
      if (currentRelease.value.includedInAll4Access) {
        _push(`<img class="new-release__accessibility-logos"${ssrRenderAttr("src", _imports_3)} alt="all4access logo" data-v-75c148a8>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p data-v-75c148a8><strong data-v-75c148a8>language: </strong> ${ssrInterpolate(currentRelease.value.language === "EN" ? "English" : "Spanish")}</p><p data-v-75c148a8><strong data-v-75c148a8>Accessibility: </strong> ${ssrInterpolate(accessibilityOptions.value)}</p><p data-v-75c148a8><strong data-v-75c148a8>Where to watch: </strong><a${ssrRenderAttr("href", currentRelease.value.whereToWatchLink)} rel="noopener noreferrer" target="_blank" data-v-75c148a8>${ssrInterpolate(currentRelease.value.whereToWatch)}</a></p>`);
      if (currentRelease.value.includedInAll4Access) {
        _push(`<p data-v-75c148a8><strong data-v-75c148a8>Accessibility available in: </strong><a href="https://all4access.com/" data-v-75c148a8>All4Access</a></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-75c148a8><strong data-v-75c148a8>Date: </strong>${ssrInterpolate(currentRelease.value.month + " " + currentRelease.value.accessibilityReleaseYear)}</p><p class="new-release__description" data-v-75c148a8>${ssrInterpolate(currentRelease.value.description)}</p><a class="new-release__play-icon-container"${ssrRenderAttr("href", currentRelease.value.whereToWatchLink)} rel="noopener noreferrer" target="_blank" data-v-75c148a8><img class="new-release__play-icon"${ssrRenderAttr("src", _imports_4)} alt="play icon" data-v-75c148a8></a><p data-v-75c148a8><strong data-v-75c148a8>Content Provider: </strong>${ssrInterpolate(currentRelease.value.provider)}</p>`);
      if (currentRelease.value.seasonNumber) {
        _push(`<p data-v-75c148a8><strong data-v-75c148a8>Season: </strong>${ssrInterpolate(currentRelease.value.seasonNumber)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-75c148a8><strong data-v-75c148a8>${ssrInterpolate(currentRelease.value.series ? "Series" : "Film")}</strong></p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/new-releases/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75c148a8"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-9asCwqkG.mjs.map
