import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DddZ2V8h.mjs';
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
  __name: "case-studies",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta Case Studies | Real-World Examples of Accessible Media Solutions",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover Dicapta's case studies, showcasing real-world examples of our innovative accessibility solutions in action. See how we enhance media for all audiences."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "case-studies"
      }, _attrs))} data-v-946946d1><div class="case-studies__header" data-v-946946d1><h1 data-v-946946d1>Case Studies</h1></div><div class="case-studies__content" data-v-946946d1><div class="mocked-card" data-v-946946d1><img${ssrRenderAttr("src", _imports_0)} alt="" loading="lazy" width="800" height="534" data-v-946946d1><h3 data-v-946946d1> Empowering Accessibility: How All4Access Technology Transformed Access for a Blind Student at Johns Hopkins </h3><p data-v-946946d1> A blind Johns Hopkins student was taking a Turkish culture class, but she could not access the course&#39;s video materials. Thanks to the use of Dicapta&#39;s All4Access technology, the student received the necessary tools to access the material and be on equal footing with her classmates. </p><a href="/resources/case-study-article" data-v-946946d1>Read More</a></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/case-studies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const caseStudies = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-946946d1"]]);

export { caseStudies as default };
//# sourceMappingURL=case-studies-CYTDWxd2.mjs.map
