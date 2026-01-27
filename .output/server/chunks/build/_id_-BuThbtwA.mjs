import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { j as json } from './accessibilityTipsMocked-Caa_ttWe.mjs';
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
    const route = useRoute();
    const articles = json.articles;
    const currentArticle = articles.filter(
      (article) => article.id === Number(route.params.id)
    )[0];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "article" }, _attrs))} data-v-8bb8feed><div class="article__header" data-v-8bb8feed><h2 data-v-8bb8feed>Dicapta Accessibility Tips</h2></div><main id="main" class="article__content" data-v-8bb8feed><h1 class="article__title" data-v-8bb8feed>${ssrInterpolate(unref(currentArticle).title)}</h1><img class="article__image"${ssrRenderAttr("src", unref(currentArticle).internalImg || unref(currentArticle).imgUrl)}${ssrRenderAttr("alt", unref(currentArticle).internalImgAlt || unref(currentArticle).imgAlt)} data-v-8bb8feed><div data-v-8bb8feed>${(_a = unref(currentArticle).content) != null ? _a : ""}</div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/accessibility-tips/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bb8feed"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BuThbtwA.mjs.map
