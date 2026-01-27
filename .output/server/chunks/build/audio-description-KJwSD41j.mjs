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
  __name: "audio-description",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Audio Description Solutions for Accessible Media",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Make your media accessible to visually impaired audiences with Dicapta\u2019s professional audio description services. Create inclusive content effortlessly. Contact us today!"
        }
      ]
    });
    const rowWithIconsArray = ref([
      {
        icon: "lnr-history",
        title: "AD Script with TC",
        text: "DESCRIPTION SCRIPTS WITH TIME CODE"
      },
      {
        icon: "lnr-sync",
        title: "Complement content's tone",
        text: "SCRIPT AND VOICE TALENTS ALIGNED WITH THE ORIGINAL CONTENT'S TONE"
      },
      {
        icon: "lnr-chart-bars",
        title: "AD Track Mixed",
        text: "AUDIO DESCRIPTION AUDIO TRACK MIXED WITH O RIGINAL AUDIO"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "audio-description"
      }, _attrs))} data-v-0edc99a4><h1 class="audio-description__title" data-v-0edc99a4>Audio description</h1><p class="audio-description__subtitle" data-v-0edc99a4> Services that bring images, videos, movies or any other visual to everyone </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, { elements: rowWithIconsArray.value }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-0edc99a4${_scopeId}> Audio description brings key visual elements to life through narration, <strong data-v-0edc99a4${_scopeId}>enabling people with visual disabilities to enjoy video content</strong> with greater richness and immersion. Available on broadcast TV via the SAP, on streaming platforms via an alternate audio channel, or via the <a href="https://all4access.com/how-to-use" data-v-0edc99a4${_scopeId}>All4Access app</a>, audio description empowers viewers to engage fully with their favorite content. </p><p data-v-0edc99a4${_scopeId}> With over <strong data-v-0edc99a4${_scopeId}>20 years of experience</strong>, Dicapta is dedicated to crafting high-quality audio descriptions in English and Spanish. Audio description is more than a service\u2014it\u2019s our passion. We meticulously <strong data-v-0edc99a4${_scopeId}>match language and narration style to the original work</strong>, ensuring each piece feels natural and enhances the viewer\u2019s experience. </p><p data-v-0edc99a4${_scopeId}> Our projects span a wide range of genres, from children\u2019s programming to nature, science, and social issues. We\u2019re proud to collaborate with esteemed clients such as Fred Rogers Productions, WaterBear, Sesame Workshop, Passport to Knowledge, POV, Pragda, Semillitas, Superfest, and Johns Hopkins University. </p><p data-v-0edc99a4${_scopeId}> Dicapta has also developed <strong data-v-0edc99a4${_scopeId}>proprietary technology</strong> that streamlines the audio description process, allowing us to deliver faster, higher-quality results. In addition, our <a href="https://all4access.com/All_4_Access/" data-v-0edc99a4${_scopeId}>All4Access Clearinghouse</a> and app make it easier than ever for users to access audio descriptions and other accessible features anytime, anywhere. </p><p data-v-0edc99a4${_scopeId}> When you work with Dicapta, you choose an unparalleled dedication to accessibility and excellence. We guarantee a product that meets the highest standards, crafted with care and expertise to elevate your content for all audiences. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" Audio description brings key visual elements to life through narration, "),
                createVNode("strong", null, "enabling people with visual disabilities to enjoy video content"),
                createTextVNode(" with greater richness and immersion. Available on broadcast TV via the SAP, on streaming platforms via an alternate audio channel, or via the "),
                createVNode("a", { href: "https://all4access.com/how-to-use" }, "All4Access app"),
                createTextVNode(", audio description empowers viewers to engage fully with their favorite content. ")
              ]),
              createVNode("p", null, [
                createTextVNode(" With over "),
                createVNode("strong", null, "20 years of experience"),
                createTextVNode(", Dicapta is dedicated to crafting high-quality audio descriptions in English and Spanish. Audio description is more than a service\u2014it\u2019s our passion. We meticulously "),
                createVNode("strong", null, "match language and narration style to the original work"),
                createTextVNode(", ensuring each piece feels natural and enhances the viewer\u2019s experience. ")
              ]),
              createVNode("p", null, " Our projects span a wide range of genres, from children\u2019s programming to nature, science, and social issues. We\u2019re proud to collaborate with esteemed clients such as Fred Rogers Productions, WaterBear, Sesame Workshop, Passport to Knowledge, POV, Pragda, Semillitas, Superfest, and Johns Hopkins University. "),
              createVNode("p", null, [
                createTextVNode(" Dicapta has also developed "),
                createVNode("strong", null, "proprietary technology"),
                createTextVNode(" that streamlines the audio description process, allowing us to deliver faster, higher-quality results. In addition, our "),
                createVNode("a", { href: "https://all4access.com/All_4_Access/" }, "All4Access Clearinghouse"),
                createTextVNode(" and app make it easier than ever for users to access audio descriptions and other accessible features anytime, anywhere. ")
              ]),
              createVNode("p", null, " When you work with Dicapta, you choose an unparalleled dedication to accessibility and excellence. We guarantee a product that meets the highest standards, crafted with care and expertise to elevate your content for all audiences. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe class="audio-description__video" width="100%" height="360" src="https://www.youtube.com/embed/ZIcVVLV2aso?si=F1uhoTcGInhAhQR_&amp;amp;wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-0edc99a4${_scopeId}></iframe><iframe class="audio-description__video" width="100%" height="360" src="https://www.youtube.com/embed/uo3Eu_EmW9o?si=uTrJf7tr-rpyUJrv&amp;amp;wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-0edc99a4${_scopeId}></iframe><a class="button audio-description__contact-button" href="/about/contact-us" data-v-0edc99a4${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("iframe", {
                class: "audio-description__video",
                width: "100%",
                height: "360",
                src: "https://www.youtube.com/embed/ZIcVVLV2aso?si=F1uhoTcGInhAhQR_&amp;wmode=transparent",
                frameborder: "0",
                allowfullscreen: "allowfullscreen"
              }),
              createVNode("iframe", {
                class: "audio-description__video",
                width: "100%",
                height: "360",
                src: "https://www.youtube.com/embed/uo3Eu_EmW9o?si=uTrJf7tr-rpyUJrv&amp;wmode=transparent",
                frameborder: "0",
                allowfullscreen: "allowfullscreen"
              }),
              createVNode("a", {
                class: "button audio-description__contact-button",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/audio-description.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const audioDescription = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0edc99a4"]]);

export { audioDescription as default };
//# sourceMappingURL=audio-description-KJwSD41j.mjs.map
