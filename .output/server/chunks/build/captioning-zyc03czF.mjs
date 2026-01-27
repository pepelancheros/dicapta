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
  __name: "captioning",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Professional Captioning for Media Accessibility",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Boost inclusivity with Dicapta\u2019s expert captioning services. Perfect for TV, movies, and digital platforms, our solutions meet all accessibility needs. Learn more today!"
        }
      ]
    });
    const rowWithIconsArray = ref([
      {
        icon: "lnr-picture",
        title: "Multiple Video Formats",
        text: "AVAILABLE FOR DATA EXCHANGE"
      },
      {
        icon: "lnr-spell-check",
        title: "C95% ~ 100% Accuracy",
        text: "REAL-TIME and OFF-LINE CAPTIONING"
      },
      {
        icon: "lnr-license",
        title: "We meet and exceed",
        text: "FCC CAPTION QUALITY BEST PRACTICES"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "caption"
      }, _attrs))} data-v-02c61912><section data-v-02c61912><h1 class="caption__title" data-v-02c61912>Captioning</h1><p class="caption__subtitle" data-v-02c61912> Turning audio from any media into an accessible text format </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsArray.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-02c61912${_scopeId}>Ask for packages available based on your production needs.</h3><p data-v-02c61912${_scopeId}> Captions are the text displayed over a video and contain all of the video&#39;s audio information. This feature allows the hearing impaired to access audible information. </p><p data-v-02c61912${_scopeId}><strong data-v-02c61912${_scopeId}>We provide:</strong></p><ul data-v-02c61912${_scopeId}><li data-v-02c61912${_scopeId}>Offline captioning in English and Spanish.</li><li data-v-02c61912${_scopeId}>Real-time captioning for live programs in Spanish.</li><li data-v-02c61912${_scopeId}>Roll up/Pop on.</li><li id="LIVE" data-v-02c61912${_scopeId}>Translated captions in English and Spanish.</li><li data-v-02c61912${_scopeId}> 100% accuracy in offline captioning and 95% accuracy in real-time captioning. </li></ul>`);
          } else {
            return [
              createVNode("h3", null, "Ask for packages available based on your production needs."),
              createVNode("p", null, " Captions are the text displayed over a video and contain all of the video's audio information. This feature allows the hearing impaired to access audible information. "),
              createVNode("p", null, [
                createVNode("strong", null, "We provide:")
              ]),
              createVNode("ul", null, [
                createVNode("li", null, "Offline captioning in English and Spanish."),
                createVNode("li", null, "Real-time captioning for live programs in Spanish."),
                createVNode("li", null, "Roll up/Pop on."),
                createVNode("li", { id: "LIVE" }, "Translated captions in English and Spanish."),
                createVNode("li", null, " 100% accuracy in offline captioning and 95% accuracy in real-time captioning. ")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe width="100%" height="360" src="https://www.youtube.com/embed/49LYL1gOmTM?rel=0&amp;amp;wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-02c61912${_scopeId}></iframe><a class="button" href="/about/contact-us" data-v-02c61912${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("iframe", {
                width: "100%",
                height: "360",
                src: "https://www.youtube.com/embed/49LYL1gOmTM?rel=0&amp;wmode=transparent",
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
      _push(`</section><section data-v-02c61912><h2 class="caption__title caption__title--small-top-margin" data-v-02c61912>Subtitles</h2>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-02c61912${_scopeId}> Incorporating subtitles into your productions is essential for fostering accessibility and captivating a broader audience. Even in the absence of dubbing, subtitles empower individuals who are deaf, hard of hearing, or non-native speakers to fully immerse themselves in your content. </p><p data-v-02c61912${_scopeId}><span data-preserver-spaces="true" data-v-02c61912${_scopeId}>We carefully create idiomatic adapted subtitles that ensure your content resonates with the audience</span>.\xA0<span data-preserver-spaces="true" data-v-02c61912${_scopeId}>Subtitles for English/French/Spanish are available within three business days.</span></p><p data-v-02c61912${_scopeId}><strong data-v-02c61912${_scopeId}>Options</strong></p><ul data-v-02c61912${_scopeId}><li data-v-02c61912${_scopeId}>Subtitle files.</li><li data-v-02c61912${_scopeId}>Subtitles and layback to tape formats.</li><li data-v-02c61912${_scopeId}> Subtitles for the Deaf and Hard of Hearing (including translation if the subtitles are needed in a different language). </li></ul><a class="button" href="/about/contact-us" data-v-02c61912${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("p", null, " Incorporating subtitles into your productions is essential for fostering accessibility and captivating a broader audience. Even in the absence of dubbing, subtitles empower individuals who are deaf, hard of hearing, or non-native speakers to fully immerse themselves in your content. "),
              createVNode("p", null, [
                createVNode("span", { "data-preserver-spaces": "true" }, "We carefully create idiomatic adapted subtitles that ensure your content resonates with the audience"),
                createTextVNode(".\xA0"),
                createVNode("span", { "data-preserver-spaces": "true" }, "Subtitles for English/French/Spanish are available within three business days.")
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Options")
              ]),
              createVNode("ul", null, [
                createVNode("li", null, "Subtitle files."),
                createVNode("li", null, "Subtitles and layback to tape formats."),
                createVNode("li", null, " Subtitles for the Deaf and Hard of Hearing (including translation if the subtitles are needed in a different language). ")
              ]),
              createVNode("a", {
                class: "button",
                href: "/about/contact-us"
              }, "Contact Us")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe width="100%" height="360" src="https://www.youtube.com/embed/Dbwvayo8NUk?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-02c61912${_scopeId}></iframe>`);
          } else {
            return [
              createVNode("iframe", {
                width: "100%",
                height: "360",
                src: "https://www.youtube.com/embed/Dbwvayo8NUk?wmode=transparent",
                frameborder: "0",
                allowfullscreen: "allowfullscreen",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/captioning.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const captioning = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02c61912"]]);

export { captioning as default };
//# sourceMappingURL=captioning-zyc03czF.mjs.map
