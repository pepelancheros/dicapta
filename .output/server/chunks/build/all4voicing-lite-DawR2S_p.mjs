import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { R as RowWithIconsAndText } from './RowWithIconsAndText-BgkV3c5G.mjs';
import { T as TwoColumnTextAndImage } from './TwoColumnTextAndImage-B2zk3l7g.mjs';
import { useHead } from '@vueuse/head';
import { _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/all4voicing-banner.webp");
const _imports_1 = publicAssetsURL("/assets/images/all4voicing-banner-m.webp");
const _imports_2 = publicAssetsURL("/assets/images/all4voicing-logo.webp");
const _imports_3 = publicAssetsURL("/assets/images/all4voicing-icons.webp");
const _sfc_main = {
  __name: "all4voicing-lite",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "All4Voicing Lite | Streamlined Audio Description for Education",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover All4Voicing Lite, our new cloud platform for efficient audio description. Designed for educational use, it streamlines production workflows effortlessly."
        }
      ]
    });
    const rowWithIconsArray = ref([
      {
        imageUrl: "/assets/images/icon1devoicing.png",
        alt: "",
        title: "One-stop shop",
        text: "THE ENTIRE PROCESS IS DONE IN ONE PLACE"
      },
      {
        imageUrl: "/assets/images/icon2devoicing.png",
        alt: "",
        title: "Automatic detection",
        text: "AUTOMATIC DETECTION OF SPACES FOR DESCRIPTION"
      },
      {
        imageUrl: "/assets/images/icon3devoicing.png",
        alt: "",
        title: "Smooth collaboration",
        text: "SEAMLESS TEAMWORK FOSTERS AGILE AND EFFICIENT COLLABORATION"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "all4voicing"
      }, _attrs))} data-v-eb2626b5><section class="banner" data-v-eb2626b5><picture data-v-eb2626b5><source class="banner__img" media="(min-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} alt="An abstract wave pattern featuring vibrant shades of purple and blue, creating a dynamic and fluid visual effect." width="2000" height="844" data-v-eb2626b5><source class="banner__img" media="(max-width: 767px)"${ssrRenderAttr("srcset", _imports_1)} alt="An abstract wave pattern featuring vibrant shades of purple and blue, creating a dynamic and fluid visual effect." width="800" height="533" data-v-eb2626b5><img class="banner__img" aria-hidden="true" decoding="async"${ssrRenderAttr("src", _imports_0)} alt="An abstract wave pattern featuring vibrant shades of purple and blue, creating a dynamic and fluid visual effect." width="2000" height="844" data-v-eb2626b5></picture><img class="banner__logo"${ssrRenderAttr("src", _imports_2)} alt="logo with the text All4Voicing Lite" data-v-eb2626b5><img class="banner__icons"${ssrRenderAttr("src", _imports_3)} alt="3 icons featuring the words &#39;record&#39;, &#39;write&#39; and &#39;mix audio&#39; representing the features that the platform offers." data-v-eb2626b5></section><h1 class="all4voicing__title" data-v-eb2626b5>All4Voicing Lite</h1><p class="all4voicing__subtitle" data-v-eb2626b5> A one-stop shop for making videos accessible to people with visual disabilities. </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, { elements: rowWithIconsArray.value }, null, _parent));
      _push(ssrRenderComponent(TwoColumnTextAndImage, {
        imageUrl: "/assets/images/All4Voicingimage.webp",
        imageAlt: "A video editor where the description and audio of a video is being modified.",
        class: "all4voicing__info"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-eb2626b5${_scopeId}> All4Voicing is a way for the entire <strong data-v-eb2626b5${_scopeId}>audio description (AD)</strong> process to happen seamlessly in one place, including identifying spaces and adding descriptions to mixing AD narration with the original audio. By consolidating all AD tasks into a single platform, All4Voicing eliminates the need for multiple software and tools, streamlining coordination efforts and reducing time-consuming revisions. </p><p data-v-eb2626b5${_scopeId}> We have experienced how this streamlined and intuitive approach allows users to focus on crafting high-quality AD content, cutting creation time from days to hours and increasing the availability of accessible educational content. </p><p data-v-eb2626b5${_scopeId}> Learn more at <a href="http://lite.all4voicing.com" data-v-eb2626b5${_scopeId}>All4Voicing Lite</a>. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" All4Voicing is a way for the entire "),
                createVNode("strong", null, "audio description (AD)"),
                createTextVNode(" process to happen seamlessly in one place, including identifying spaces and adding descriptions to mixing AD narration with the original audio. By consolidating all AD tasks into a single platform, All4Voicing eliminates the need for multiple software and tools, streamlining coordination efforts and reducing time-consuming revisions. ")
              ]),
              createVNode("p", null, " We have experienced how this streamlined and intuitive approach allows users to focus on crafting high-quality AD content, cutting creation time from days to hours and increasing the availability of accessible educational content. "),
              createVNode("p", null, [
                createTextVNode(" Learn more at "),
                createVNode("a", { href: "http://lite.all4voicing.com" }, "All4Voicing Lite"),
                createTextVNode(". ")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/all4voicing-lite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const all4voicingLite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb2626b5"]]);

export { all4voicingLite as default };
//# sourceMappingURL=all4voicing-lite-DawR2S_p.mjs.map
