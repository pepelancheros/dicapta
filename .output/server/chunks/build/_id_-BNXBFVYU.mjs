import _sfc_main$1 from './StrapiBlocksText-DOXrB8uK.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { L as Loading } from '../_/index.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const currentArticle = ref({});
    const isLoading = ref(false);
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StrapiBlocksText = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "blog-article__container" }, _attrs))} data-v-6803b060>`);
      if (isLoading.value) {
        _push(`<div class="loading__container" data-v-6803b060>`);
        _push(ssrRenderComponent(unref(Loading), {
          class: "loading",
          active: isLoading.value,
          "is-full-page": true,
          color: "#0f52ba",
          width: 100,
          height: 100
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="blog-article" style="${ssrRenderStyle(!isLoading.value ? null : { display: "none" })}" data-v-6803b060><h1 class="blog-article__title" data-v-6803b060>${ssrInterpolate(currentArticle.value.title)}</h1><p data-v-6803b060>Published: ${ssrInterpolate(currentArticle.value.publishDate)}</p>`);
      if (currentArticle.value.author) {
        _push(`<p data-v-6803b060>By: ${ssrInterpolate(currentArticle.value.author)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="blog-article__content" data-v-6803b060><img class="blog-article__image"${ssrRenderAttr("src", currentArticle.value.imageUrl)}${ssrRenderAttr("alt", currentArticle.value.imageAltText)} data-v-6803b060></div>`);
      if (currentArticle.value.content) {
        _push(ssrRenderComponent(_component_StrapiBlocksText, {
          nodes: currentArticle.value.content
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6803b060"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BNXBFVYU.mjs.map
