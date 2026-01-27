import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DddZ2V8h.mjs';
import { T as TwoColumns } from './TwoColumns-BE5DFbb2.mjs';
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
  __name: "case-study-article",
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
        class: "case-study"
      }, _attrs))} data-v-0e7a9dfb><p class="case-study__date blue-background" data-v-0e7a9dfb>12 MAY 2024</p><section class="blue-background case-study__first-section" data-v-0e7a9dfb><h1 class="case-study__title" data-v-0e7a9dfb> Empowering Accessibility: How All4Access Technology Transformed Access for a Blind Student at Johns Hopkins </h1></section><section data-v-0e7a9dfb>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 data-v-0e7a9dfb${_scopeId}>Summary:</h2><p data-v-0e7a9dfb${_scopeId}> A blind Johns Hopkins student was taking a Turkish culture class, but she could not access the course&#39;s video materials. Thanks to the use of Dicapta&#39;s All4Access technology, the student received the necessary tools to access the material and be on equal footing with her classmates. </p>`);
          } else {
            return [
              createVNode("h2", null, "Summary:"),
              createVNode("p", null, " A blind Johns Hopkins student was taking a Turkish culture class, but she could not access the course's video materials. Thanks to the use of Dicapta's All4Access technology, the student received the necessary tools to access the material and be on equal footing with her classmates. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" width="800" height="534" data-v-0e7a9dfb${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                width: "800",
                height: "534"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="blue-background" data-v-0e7a9dfb><h2 data-v-0e7a9dfb>The challenge:</h2><p data-v-0e7a9dfb> The Student Disability Services Office at Johns Hopkins University needed to provide access to movies in Turkish and Kurdish language to a blind student. The movies were part of a cultural course and had English subtitles. It was important to hear the film&#39;s original dialogues because they conveyed part of the cultural ambiance of the film. Since the student didn&#39;t have access to the film&#39;s visual elements and couldn&#39;t read the subtitles, it was necessary to find a way to solve both issues at once in a way that provided the student with a seamless experience. Dicapta provided several options, including creating a voiceover to give access to the subtitles, and worked with the student and the team at Johns Hopkins to determine the best way to give access to the film. </p></section><section data-v-0e7a9dfb><h2 data-v-0e7a9dfb>The solution:</h2><p data-v-0e7a9dfb> Dicapta created audio descriptions to provide access to the film&#39;s visuals and uploaded them to the All4Access platform. At the same time, since the university provided the English subtitles files, we were able to also upload the subtitles to All4Access. The student used the all4Access app to listen to the audio description and access the subtitles in her braille display. </p></section><section class="blue-background" data-v-0e7a9dfb><h2 data-v-0e7a9dfb>The results:</h2><p data-v-0e7a9dfb> The student was able to access the same information her classmates received and realized that she could enjoy a movie; as she previously mentioned, she only had an interest in books because of the accessibility barriers. The Student Disability Services Office was able to solve the accessibility challenge for this particular student and also determined that the All4Access technology was a versatile tool for solving students with disabilities&#39; access challenges. The Johns Hopkins team described All4Access as &quot;a pipe dream.&quot; </p></section><section data-v-0e7a9dfb><p data-v-0e7a9dfb> &quot;The experience of using All4Access to provide access for our student was great! I have never appreciated small business more, as we were able to work so closely together and provide feedback throughout the term to make sure that the student was getting the access she needed as well as preferred.&quot; </p><p data-v-0e7a9dfb>Julie Clementson,</p><p data-v-0e7a9dfb> Accessibility and Assistive Technology Coordinator, Student Disability Services at Johns Hopkins University. </p></section><section class="blue-background case-study__last-section" data-v-0e7a9dfb><h2 data-v-0e7a9dfb>About Johns Hopkins:</h2><p data-v-0e7a9dfb> Johns Hopkins University, founded in 1876, is America&#39;s first research university. Renowned for its nine world-class academic divisions, it serves nearly 24,000 students across various disciplines. Located in Baltimore, MD, Johns Hopkins also extends its reach globally with graduate campuses in Italy, China, and Washington, D.C., fostering a diverse and expansive academic community. </p></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resources/case-study-article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const caseStudyArticle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e7a9dfb"]]);

export { caseStudyArticle as default };
//# sourceMappingURL=case-study-article-DBVmt58J.mjs.map
