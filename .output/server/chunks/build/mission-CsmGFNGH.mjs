import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/mission-banner.webp");
const _imports_1 = publicAssetsURL("/assets/images/mission-banner-m.webp");
const _sfc_main = {
  __name: "mission",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta Mission | Empowering Accessibility through Innovation",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn about Dicapta\u2019s mission to make media accessible to all through cutting-edge solutions like audio description, captioning, and multilingual dubbing."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-646bb352><section class="banner" data-v-646bb352><picture data-v-646bb352><source class="banner__img" media="(min-width: 768px)"${ssrRenderAttr("srcset", _imports_0)} alt="Two people watching TV. The same image from the TV appears on a tablet. Next to the AD icon on the tablet." width="2500" heigth="1667" data-v-646bb352><source class="banner__img" media="(max-width: 767px)"${ssrRenderAttr("srcset", _imports_1)} alt="Two people watching TV. The same image from the TV appears on a tablet. Next to the AD icon on the tablet." width="1400" heigth="934" data-v-646bb352><img class="banner__img" aria-hidden="true" decoding="async"${ssrRenderAttr("src", _imports_0)} alt="Two people watching TV. The same image from the TV appears on a tablet. Next to the AD icon on the tablet." width="2500" heigth="1667" data-v-646bb352></picture><h1 class="banner__text" data-v-646bb352><strong data-v-646bb352>Accessibility</strong> is our passion </h1></section><section class="mission" data-v-646bb352>`);
      _push(ssrRenderComponent(TwoColumnTextAndImage, {
        title: "Our mission",
        buttonText: "Meet our team",
        buttonUrl: "/about/our-team",
        imageUrl: "/assets/images/keyboard-accessibility.webp",
        imageAlt: "A finger touches a keyboard key labeled Accessibility",
        imageText: "Disabilities Collaborative organization bringing Access through the\r\n            Power of Technology for All DICAPTA"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-646bb352${_scopeId}> By developing accessible communications for everyone regardless of their abilities, Dicapta focuses on ensuring that media, entertainment, and culture are widely available and accessible for people with sensory disabilities, and Latinos in the U.S. </p><p data-v-646bb352${_scopeId}> Since 2005, we at Dicapta have been proudly honored with grants from the United States Department of Education and the United States Department of Health and Human Services. </p>`);
          } else {
            return [
              createVNode("p", null, " By developing accessible communications for everyone regardless of their abilities, Dicapta focuses on ensuring that media, entertainment, and culture are widely available and accessible for people with sensory disabilities, and Latinos in the U.S. "),
              createVNode("p", null, " Since 2005, we at Dicapta have been proudly honored with grants from the United States Department of Education and the United States Department of Health and Human Services. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="latino" data-v-646bb352>`);
      _push(ssrRenderComponent(TwoColumnTextAndImage, {
        title: "Latino",
        imageUrl: "/assets/images/latino.webp",
        imageAlt: "A diverse group of young people pump their fists in joy",
        imageText: "Latino is our native language",
        imageFirst: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-646bb352${_scopeId}> &quot;The U.S. Latino population reached 62.1 million in 2020, up from 50.5 million in 2010.&quot; Pew Research Center, 2021. </p><p data-v-646bb352${_scopeId}> Considering that in 2020 Latinos were the 19% of the U.S. population and that the incidence of disabilities in this community is increasing faster than in other races, we at Dicapta concentrate our efforts on serving the specific needs of Latinos with disabilities. </p><p data-v-646bb352${_scopeId}> Additional information: Latinos4Access, In My Own Words, Facts about Latinos in the U.S., Profile of Latinos with disabilities, Hispanic children with disabilities. </p>`);
          } else {
            return [
              createVNode("p", null, ' "The U.S. Latino population reached 62.1 million in 2020, up from 50.5 million in 2010." Pew Research Center, 2021. '),
              createVNode("p", null, " Considering that in 2020 Latinos were the 19% of the U.S. population and that the incidence of disabilities in this community is increasing faster than in other races, we at Dicapta concentrate our efforts on serving the specific needs of Latinos with disabilities. "),
              createVNode("p", null, " Additional information: Latinos4Access, In My Own Words, Facts about Latinos in the U.S., Profile of Latinos with disabilities, Hispanic children with disabilities. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="technology" data-v-646bb352>`);
      _push(ssrRenderComponent(TwoColumnTextAndImage, {
        title: "Technology",
        imageUrl: "/assets/images/hands-connection.png",
        imageAlt: "Illustration. Two hands, made of bright blue lines, touch a sphere with the word connection. The sphere lights up at the points where the fingertips touch it.",
        imageText: "Technology is our strength"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-646bb352${_scopeId}> &quot;The U.S. Latino population reached 62.1 million in 2020, up from 50.5 million in 2010.&quot; Pew Research Center, 2021. </p><p data-v-646bb352${_scopeId}> Since its creation and continuously, Dicapta has focused its efforts on developing technological tools that allow the creation of accessibility elements more effectively and efficiently to guarantee access to education, culture, and information for people with sensory disabilities. </p>`);
          } else {
            return [
              createVNode("p", null, ' "The U.S. Latino population reached 62.1 million in 2020, up from 50.5 million in 2010." Pew Research Center, 2021. '),
              createVNode("p", null, " Since its creation and continuously, Dicapta has focused its efforts on developing technological tools that allow the creation of accessibility elements more effectively and efficiently to guarantee access to education, culture, and information for people with sensory disabilities. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="accessibility" data-v-646bb352>`);
      _push(ssrRenderComponent(TwoColumnTextAndImage, {
        title: "Accessibility",
        imageUrl: "/assets/images/braile-computer.webp",
        imageAlt: "A man uses a braille display next to a computer keyboard on a desk.",
        imageText: "Accessibility is our passion",
        imageFirst: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-646bb352${_scopeId}> &quot;The U.S. Latino population reached 62.1 million in 2020, up from 50.5 million in 2010.&quot; Pew Research Center, 2021. </p><p data-v-646bb352${_scopeId}> For us, accessibility is how usable a product, service, media piece, educational tool, website, and cultural or entertainment activity is by people with disabilities. </p><p data-v-646bb352${_scopeId}> Accessibility is a meaningful word that invites us to think about inclusion and equality. </p>`);
          } else {
            return [
              createVNode("p", null, ' "The U.S. Latino population reached 62.1 million in 2020, up from 50.5 million in 2010." Pew Research Center, 2021. '),
              createVNode("p", null, " For us, accessibility is how usable a product, service, media piece, educational tool, website, and cultural or entertainment activity is by people with disabilities. "),
              createVNode("p", null, " Accessibility is a meaningful word that invites us to think about inclusion and equality. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="beneficiaries" data-v-646bb352>`);
      _push(ssrRenderComponent(TwoColumnTextAndImage, {
        title: "Our beneficiaries",
        imageUrl: "/assets/images/boy-headset.webp",
        imageAlt: "A blind boy listens to something with headphones on.",
        imageText: "Students with sensory disabilities are the main beneficiaries of our efforts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-646bb352${_scopeId}> Dicapta\u2019s efforts look to serve people with sensory disabilities- including those identified as DeafBlind. </p><p data-v-646bb352${_scopeId}> Some facts about the community we serve are available following the links: <a target="_blank" rel="noopener noreferrer" href="/assets/pdf/blindnes-in-the-usa-2022.pdf" data-v-646bb352${_scopeId}>Visual disabilities in the U.S</a>., <a target="_blank" rel="noopener noreferrer" href="/assets/pdf/deafness-in-the-usa-2022.pdf" data-v-646bb352${_scopeId}>Hearing disabilities in the US</a>, <a target="_blank" rel="noopener noreferrer" href="/assets/pdf/sensory-disabilities-in-the-usa-2022.pdf" data-v-646bb352${_scopeId}>Students with sensory disabilities in the U.S</a>.,\xA0and <a target="_blank" rel="noopener noreferrer" href="/assets/pdf/deaf-blindness-in-the-usa-2022.pdf" data-v-646bb352${_scopeId}>DeafBlindness in the U.S</a>. </p><p data-v-646bb352${_scopeId}> For information about Latinos with disabilities, <a href="/assets/pdf/latinos-with-disablities-in-the-usa.pdf" target="_blank" rel="noopener noreferrer" title="Latinos with disabilities in the US" data-v-646bb352${_scopeId}>click here</a>. </p>`);
          } else {
            return [
              createVNode("p", null, " Dicapta\u2019s efforts look to serve people with sensory disabilities- including those identified as DeafBlind. "),
              createVNode("p", null, [
                createTextVNode(" Some facts about the community we serve are available following the links: "),
                createVNode("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "/assets/pdf/blindnes-in-the-usa-2022.pdf"
                }, "Visual disabilities in the U.S"),
                createTextVNode("., "),
                createVNode("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "/assets/pdf/deafness-in-the-usa-2022.pdf"
                }, "Hearing disabilities in the US"),
                createTextVNode(", "),
                createVNode("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "/assets/pdf/sensory-disabilities-in-the-usa-2022.pdf"
                }, "Students with sensory disabilities in the U.S"),
                createTextVNode(".,\xA0and "),
                createVNode("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "/assets/pdf/deaf-blindness-in-the-usa-2022.pdf"
                }, "DeafBlindness in the U.S"),
                createTextVNode(". ")
              ]),
              createVNode("p", null, [
                createTextVNode(" For information about Latinos with disabilities, "),
                createVNode("a", {
                  href: "/assets/pdf/latinos-with-disablities-in-the-usa.pdf",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: "Latinos with disabilities in the US"
                }, "click here"),
                createTextVNode(". ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><a class="contact-us-button button" href="/about/contact-us" data-v-646bb352>Let&#39;s keep in touch. Contact Us!</a></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/mission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mission = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-646bb352"]]);

export { mission as default };
//# sourceMappingURL=mission-CsmGFNGH.mjs.map
