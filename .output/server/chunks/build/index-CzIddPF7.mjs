import { useSSRContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { L as Loading } from '../_/index.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { P as Paginator } from './Paginator-BtA3o6Hg.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/ad-white.webp");
const _imports_1 = publicAssetsURL("/assets/images/cc-white.webp");
const _imports_2 = publicAssetsURL("/assets/images/asl-white.webp");
const _imports_3 = publicAssetsURL("/assets/images/a4a-white.webp");
const _sfc_main$1 = {
  __name: "NewReleasesCard",
  __ssrInlineRender: true,
  props: {
    release: {
      type: Object,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "release-card",
        href: `/news/new-releases/${__props.release.documentId}`
      }, _attrs))} data-v-4a77a8b6><p class="release-card__date" data-v-4a77a8b6>${ssrInterpolate(__props.release.month + " " + __props.release.accessibilityReleaseYear)}</p><img class="release-card__img"${ssrRenderAttr("src", __props.release.imageUrl)}${ssrRenderAttr("alt", __props.release.altText)} data-v-4a77a8b6><div class="release-card__info-container" data-v-4a77a8b6><div class="release-card__accessibility-logos-container" data-v-4a77a8b6>`);
      if (__props.release.AD) {
        _push(`<img class="release-card__accessibility-logos"${ssrRenderAttr("src", _imports_0)} alt="audio description logo" data-v-4a77a8b6>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.release.CC) {
        _push(`<img class="release-card__accessibility-logos release-card__accessibility-logos--closed-captions"${ssrRenderAttr("src", _imports_1)} alt="closed caption logo" data-v-4a77a8b6>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.release.ASL) {
        _push(`<img class="release-card__accessibility-logos"${ssrRenderAttr("src", _imports_2)} alt="american sign language logo" data-v-4a77a8b6>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.release.includedInAll4Access) {
        _push(`<img class="release-card__accessibility-logos"${ssrRenderAttr("src", _imports_3)} alt="all4access logo" data-v-4a77a8b6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h2 class="release-card__title" data-v-4a77a8b6>${ssrInterpolate(__props.release.title)}</h2><p data-v-4a77a8b6><strong data-v-4a77a8b6>language: </strong> ${ssrInterpolate(__props.release.language === "EN" ? "English" : "Spanish")}</p><p data-v-4a77a8b6><strong data-v-4a77a8b6> Content Provider: </strong><a class="release-card__content-provider-link"${ssrRenderAttr("href", __props.release.whereToWatchLink)} rel="noopener noreferrer" target="_blank" data-v-4a77a8b6>${ssrInterpolate(__props.release.provider)}</a></p><p data-v-4a77a8b6><strong data-v-4a77a8b6>${ssrInterpolate(__props.release.series ? "Series" : "Film")}</strong></p><p class="release-card__description" data-v-4a77a8b6>${ssrInterpolate(__props.release.description)}</p></div></a>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewReleasesCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewReleasesCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a77a8b6"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const newReleases = ref([]);
    const currentNewReleases = ref([]);
    const handlePageChange = (page) => {
      const startIndex = (page - 1) * 9;
      const endIndex = startIndex + 9;
      currentNewReleases.value = newReleases.value.slice(startIndex, endIndex);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "new-releases"
      }, _attrs))} data-v-73b6d15e><div class="new-releases__header" data-v-73b6d15e><h1 data-v-73b6d15e>New Accessibility Releases</h1></div><div class="new-releases__content" data-v-73b6d15e>`);
      _push(ssrRenderComponent(unref(Loading), {
        class: "loading",
        active: isLoading.value,
        "is-full-page": true,
        color: "#0f52ba",
        width: 100,
        height: 100
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(currentNewReleases.value, (release) => {
        _push(ssrRenderComponent(NewReleasesCard, {
          class: "new-releases__card",
          key: release.id,
          release
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="new-releases__paginator-container" data-v-73b6d15e>`);
      _push(ssrRenderComponent(Paginator, {
        "total-elements": newReleases.value.length,
        "elements-per-page": 9,
        onPageChanged: handlePageChange
      }, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/new-releases/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73b6d15e"]]);

export { index as default };
//# sourceMappingURL=index-CzIddPF7.mjs.map
