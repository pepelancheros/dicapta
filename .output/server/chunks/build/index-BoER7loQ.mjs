import { P as Paginator } from './Paginator-BtA3o6Hg.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { A as ArticleCard } from './ArticleCard-BfyglyTe.mjs';
import { L as Loading } from '../_/index.mjs';
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
    const blogArticles = ref([]);
    const currentBlogArticles = ref([]);
    const isLoading = ref(false);
    useHead({
      title: "Dicapta Blog | Insights on Accessibility, Media, and Technology",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Explore Dicapta\u2019s blog for expert insights on accessible media, audio description, multilingual dubbing, and the latest technology trends shaping inclusive content."
        }
      ]
    });
    const handlePageChange = (page) => {
      const startIndex = (page - 1) * 9;
      const endIndex = startIndex + 9;
      currentBlogArticles.value = blogArticles.value.slice(startIndex, endIndex);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Paginator = Paginator;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "blog",
        id: "main"
      }, _attrs))} data-v-fab220d6><div class="blog__header" data-v-fab220d6><h1 data-v-fab220d6>Blog</h1></div><div class="blog__content" data-v-fab220d6>`);
      _push(ssrRenderComponent(unref(Loading), {
        class: "loading",
        active: isLoading.value,
        "is-full-page": true,
        color: "#0f52ba",
        width: 100,
        height: 100
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(currentBlogArticles.value, (article) => {
        _push(ssrRenderComponent(ArticleCard, {
          class: "blog__card",
          key: article.id,
          title: article.title,
          imgUrl: article.imageUrl,
          imgAlt: article.imageAltText,
          publishDate: article.publishDate,
          text: article.cardText,
          link: `/news/blog/${article.documentId}`
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="blog__paginator-container" data-v-fab220d6>`);
      _push(ssrRenderComponent(_component_Paginator, {
        "total-elements": blogArticles.value.length,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fab220d6"]]);

export { index as default };
//# sourceMappingURL=index-BoER7loQ.mjs.map
