import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-4tvSZcQ-.mjs';
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
  __name: "white-papers",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta White Papers | In-Depth Insights on Accessibility Technology and Media",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Explore Dicapta's white papers for in-depth insights on accessibility technology, media solutions, and industry best practices. Learn more about our impact."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "white-papers"
      }, _attrs))} data-v-1f953de4><div class="white-papers__header" data-v-1f953de4><h1 data-v-1f953de4>White Papers</h1></div><div class="white-papers__content" data-v-1f953de4><div class="mocked-card" data-v-1f953de4><img${ssrRenderAttr("src", _imports_0)} alt="Two illustrations in one image: Image on the left. A young girl with light brown skin and long, dark, curly hair sits at a desk, reading a large book. She wears a bright yellow dress adorned with a sunflower pattern. Her eyes sparkle. The room is warmly illuminated, featuring a globe, a telescope, and posters in the background. Image on the right. A boy with dark brown skin and short, tightly coiled hair operates a toy car outside. He sports a red hoodie paired with blue jeans. He smiles. In the background are other children. A playground is in the distance." loading="lazy" width="468" height="468" data-v-1f953de4><h3 data-v-1f953de4> Embracing Diversity in Audio Description: A Paradigm Shift for Inclusivity </h3><p data-v-1f953de4> This white paper explores the evolving paradigm in audio description, emphasizing including racial and ethnic characteristics when describing individuals/people in media. </p><a href="/resources/white-paper-article" data-v-1f953de4>Read More</a></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/white-papers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whitePapers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f953de4"]]);

export { whitePapers as default };
//# sourceMappingURL=white-papers-kg2jPsIx.mjs.map
