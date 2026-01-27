import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { A as ArticleCard } from './ArticleCard-BfyglyTe.mjs';
import { j as json } from './accessibilityTipsMocked-Caa_ttWe.mjs';
import { P as Paginator } from './Paginator-BtA3o6Hg.mjs';
import { useHead } from '@vueuse/head';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Accessibility Tips | Inclusive Practices by Dicapta",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover Dicapta\u2019s Accessibility Tips! Learn proper etiquette, create accessible documents, and explore tools like browser plugins to promote inclusivity. Start now!"
        }
      ]
    });
    const articles = json.articles;
    const currentArticles = ref(articles.slice(0, 9));
    const handlePageChange = (page) => {
      const startIndex = (page - 1) * 9;
      const endIndex = startIndex + 9;
      currentArticles.value = articles.slice(startIndex, endIndex);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "accessibility-tips"
      }, _attrs))} data-v-f7fbdabe><div class="accessibility-tips__header" data-v-f7fbdabe><h1 data-v-f7fbdabe>Dicapta Accessibility Tips</h1></div><div class="accessibility-tips__content" data-v-f7fbdabe><!--[-->`);
      ssrRenderList(currentArticles.value, (article) => {
        _push(ssrRenderComponent(ArticleCard, {
          key: article.id,
          title: article.title,
          imgUrl: article.imgUrl,
          imgAlt: article.imgAlt,
          publishDate: article.publishDate,
          link: `/resources/accessibility-tips/${article.id}`
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="accessibility-tips__paginator-container" data-v-f7fbdabe>`);
      _push(ssrRenderComponent(Paginator, {
        "total-elements": unref(articles).length,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/accessibility-tips/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7fbdabe"]]);

export { index as default };
//# sourceMappingURL=index-D_2aVvd2.mjs.map
