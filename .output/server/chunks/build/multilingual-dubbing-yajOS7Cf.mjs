import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { R as RowWithIconsAndText } from './RowWithIconsAndText-BgkV3c5G.mjs';
import { T as TwoColumns } from './TwoColumns-BE5DFbb2.mjs';
import { useHead } from '@vueuse/head';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "multilingual-dubbing",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Multilingual Dubbing for Inclusive Content",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Seamlessly localize your media with Dicapta\u2019s multilingual dubbing services. Enjoy faster delivery and competitive pricing powered by our optimized processes. Learn more!"
        }
      ]
    });
    const rowWithIconsArray = ref([
      {
        imageUrl: "/assets/images/dubbing-ai-cloning.png",
        alt: "",
        title: "Dubbing",
        text: "WITH LIP-SYNC"
      },
      {
        imageUrl: "/assets/images/dubbing-ai.png",
        alt: "",
        title: "AI Powered",
        text: "USING NATURAL VOICES"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "dubbing"
      }, _attrs))} data-v-563c3382><h1 class="dubbing__title" data-v-563c3382>Multilingual dubbing</h1><p class="dubbing__subtitle" data-v-563c3382> Helps your production reach a greater and diverse audience </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsArray.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-563c3382${_scopeId}> We\u2019re transforming language customization by integrating advanced AI into our dubbing services, delivering quicker turnarounds, premium quality, and exclusive, diverse casting. By <strong data-v-563c3382${_scopeId}>combining real, natural voices with cutting-edge technology</strong>, we seamlessly adapt your content to resonate in a new language\u2014all while preserving the unique essence of your original production. </p><p data-v-563c3382${_scopeId}> To ensure exceptional quality, we rely on a dedicated team of language experts with deep cultural insights and thorough knowledge of target audiences. Our specialization includes <strong data-v-563c3382${_scopeId}>Spanish, English, French, and Portuguese</strong>, guaranteeing authentic connections with your viewers. </p><p data-v-563c3382${_scopeId}> Our expertise extends to <strong data-v-563c3382${_scopeId}>music and song adaptation</strong>, crafting smooth, powerful soundtracks that feel natural in the dubbed language, yet fully capture the spirit of the original. </p><p data-v-563c3382${_scopeId}> With exclusive voice and casting options available, you\u2019ll find the perfect match for your project. Contact us to explore how we can elevate your content. </p><p data-v-563c3382${_scopeId}><strong data-v-563c3382${_scopeId}>Need Real-Time Dubbing?</strong> Get in touch to learn more about this unique service. </p><p data-v-563c3382${_scopeId}><strong data-v-563c3382${_scopeId}>Our Clients Include:</strong> Fred Rogers Productions, HARPO, Passport to Knowledge, Sesame Workshop, the National Captioning Institute (NCI), VITAC, the American Council of the Blind (ACB), PBS NewsHour, Ken Burns, HITN, Univision, and more. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" We\u2019re transforming language customization by integrating advanced AI into our dubbing services, delivering quicker turnarounds, premium quality, and exclusive, diverse casting. By "),
                createVNode("strong", null, "combining real, natural voices with cutting-edge technology"),
                createTextVNode(", we seamlessly adapt your content to resonate in a new language\u2014all while preserving the unique essence of your original production. ")
              ]),
              createVNode("p", null, [
                createTextVNode(" To ensure exceptional quality, we rely on a dedicated team of language experts with deep cultural insights and thorough knowledge of target audiences. Our specialization includes "),
                createVNode("strong", null, "Spanish, English, French, and Portuguese"),
                createTextVNode(", guaranteeing authentic connections with your viewers. ")
              ]),
              createVNode("p", null, [
                createTextVNode(" Our expertise extends to "),
                createVNode("strong", null, "music and song adaptation"),
                createTextVNode(", crafting smooth, powerful soundtracks that feel natural in the dubbed language, yet fully capture the spirit of the original. ")
              ]),
              createVNode("p", null, " With exclusive voice and casting options available, you\u2019ll find the perfect match for your project. Contact us to explore how we can elevate your content. "),
              createVNode("p", null, [
                createVNode("strong", null, "Need Real-Time Dubbing?"),
                createTextVNode(" Get in touch to learn more about this unique service. ")
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Our Clients Include:"),
                createTextVNode(" Fred Rogers Productions, HARPO, Passport to Knowledge, Sesame Workshop, the National Captioning Institute (NCI), VITAC, the American Council of the Blind (ACB), PBS NewsHour, Ken Burns, HITN, Univision, and more. ")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe width="100%" height="360" src="https://www.youtube.com/embed/xVbU4Y3l0Lo?si=6vsCqRxX10dSdVR2&amp;amp;wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-563c3382${_scopeId}></iframe><a class="button" href="/about/contact-us" data-v-563c3382${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("iframe", {
                width: "100%",
                height: "360",
                src: "https://www.youtube.com/embed/xVbU4Y3l0Lo?si=6vsCqRxX10dSdVR2&amp;wmode=transparent",
                frameborder: "0",
                allowfullscreen: "allowfullscreen"
              }),
              createVNode("a", {
                class: "button",
                href: "/about/contact-us"
              }, "Contact Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/multilingual-dubbing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multilingualDubbing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-563c3382"]]);

export { multilingualDubbing as default };
//# sourceMappingURL=multilingual-dubbing-yajOS7Cf.mjs.map
