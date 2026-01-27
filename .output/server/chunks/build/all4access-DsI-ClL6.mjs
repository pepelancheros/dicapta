import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { T as TwoColumns } from './TwoColumns-BE5DFbb2.mjs';
import { R as RowWithIconsAndText } from './RowWithIconsAndText-BgkV3c5G.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/all4access-banner.webp");
const _imports_1 = publicAssetsURL("/assets/images/technology-illustration.webp");
const _imports_2 = publicAssetsURL("/assets/images/access4all-feeling-through.webp");
const _sfc_main = {
  __name: "all4access",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "All4Access | Simplifying Media Accessibility for Everyone",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All4Access by Dicapta simplifies sharing and finding accessibility assets, empowering audiences to enjoy inclusive media in streaming and live events."
        }
      ]
    });
    const rowWithIconsArray = ref([
      {
        icon: "lnr-database",
        title: "Universal Clearinghouse",
        text: "STORE & EXCHANGE YOUR ACCESSIBILITY ASSETS"
      },
      {
        icon: "lnr-earth",
        title: "Access to CC and AD",
        text: "REGARDLESS OF COUNTRY, DISTRIBUTOR, OR PLATFORM"
      },
      {
        icon: "lnr-rocket",
        title: "Emerging Technologies",
        text: "TO USE IN AUGMENTED REALITY OR SECOND SCREEN INNOVATIONS"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-a5bc9309><section class="banner" data-v-a5bc9309><img class="banner__img"${ssrRenderAttr("src", _imports_0)} alt="Several colorful ropes bind together in a circle." width="1919" height="600" data-v-a5bc9309><p class="banner__text title-global" data-v-a5bc9309> All4Access is our vehicle to make the difference </p></section><section data-v-a5bc9309>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-a5bc9309${_scopeId}><iframe width="100%" height="360" src="https://www.youtube.com/embed/ty6L4h9OOZo?rel=0&amp;amp;wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-a5bc9309${_scopeId}></iframe><p data-v-a5bc9309${_scopeId}><a href="https://all4access.com" target="_blank" rel="noopener noreferrer" data-v-a5bc9309${_scopeId}>All4Access </a>ensures that all the assets produced by Dicapta under EnhAccess are available for children with sensory disabilities or anyone else that may benefit from accessibility assets, everywhere, anytime. </p><p data-v-a5bc9309${_scopeId}><small data-v-a5bc9309${_scopeId}>The All4Access clearinghouse is funded in part by the Department of Education, Office of Special Education under their Television Access Program.</small></p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("iframe", {
                  width: "100%",
                  height: "360",
                  src: "https://www.youtube.com/embed/ty6L4h9OOZo?rel=0&amp;wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen"
                }),
                createVNode("p", null, [
                  createVNode("a", {
                    href: "https://all4access.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, "All4Access "),
                  createTextVNode("ensures that all the assets produced by Dicapta under EnhAccess are available for children with sensory disabilities or anyone else that may benefit from accessibility assets, everywhere, anytime. ")
                ]),
                createVNode("p", null, [
                  createVNode("small", null, "The All4Access clearinghouse is funded in part by the Department of Education, Office of Special Education under their Television Access Program.")
                ])
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-a5bc9309${_scopeId}> All4Access is a universal clearinghouse of accessibility assets that facilitates its exchange while protecting the rights of media creators.\xA0By having the <strong data-v-a5bc9309${_scopeId}>AD</strong> (audio descriptions),\xA0<strong data-v-a5bc9309${_scopeId}>CC</strong> (closed captions), subtitles, or\xA0<strong data-v-a5bc9309${_scopeId}>ASL</strong> (American Sign Language) version of your content in All4Access: </p><ul data-v-a5bc9309${_scopeId}><li data-v-a5bc9309${_scopeId}> Your assets will be in the cloud protected and available for you at any time. </li><li data-v-a5bc9309${_scopeId}> You can participate in any screening with the confidence of having your content accessible to audiences with disabilities or other audiences that may use the assets stored in the All4Access repository, using the All4ccess application, or any other app connected to the repository. </li><li data-v-a5bc9309${_scopeId}> Your content will be accessible regardless of where or how your audience is watching it. </li><li data-v-a5bc9309${_scopeId}> You contribute with your example to building an inclusive, equal, and diverse world for all of us. </li></ul><br data-v-a5bc9309${_scopeId}><blockquote data-v-a5bc9309${_scopeId}><div style="${ssrRenderStyle({ "font-size": "1.5em" })}" data-v-a5bc9309${_scopeId}> Let&#39;s make media<a href="https://www.all4access.com" target="_blank" rel="noopener noreferrer" data-v-a5bc9309${_scopeId}><span style="${ssrRenderStyle({ "color": "#0257bf", "font-size": "1.5em" })}" data-v-a5bc9309${_scopeId}><strong data-v-a5bc9309${_scopeId}> accessible</strong></span></a> together! </div></blockquote>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" All4Access is a universal clearinghouse of accessibility assets that facilitates its exchange while protecting the rights of media creators.\xA0By having the "),
                createVNode("strong", null, "AD"),
                createTextVNode(" (audio descriptions),\xA0"),
                createVNode("strong", null, "CC"),
                createTextVNode(" (closed captions), subtitles, or\xA0"),
                createVNode("strong", null, "ASL"),
                createTextVNode(" (American Sign Language) version of your content in All4Access: ")
              ]),
              createVNode("ul", null, [
                createVNode("li", null, " Your assets will be in the cloud protected and available for you at any time. "),
                createVNode("li", null, " You can participate in any screening with the confidence of having your content accessible to audiences with disabilities or other audiences that may use the assets stored in the All4Access repository, using the All4ccess application, or any other app connected to the repository. "),
                createVNode("li", null, " Your content will be accessible regardless of where or how your audience is watching it. "),
                createVNode("li", null, " You contribute with your example to building an inclusive, equal, and diverse world for all of us. ")
              ]),
              createVNode("br"),
              createVNode("blockquote", null, [
                createVNode("div", { style: { "font-size": "1.5em" } }, [
                  createTextVNode(" Let's make media"),
                  createVNode("a", {
                    href: "https://www.all4access.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    createVNode("span", { style: { "color": "#0257bf", "font-size": "1.5em" } }, [
                      createVNode("strong", null, " accessible")
                    ])
                  ]),
                  createTextVNode(" together! ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-a5bc9309>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsArray.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-a5bc9309${_scopeId}> The <a href="https://all4access.com" data-v-a5bc9309${_scopeId}>All4Access</a> clearinghouse aims to increase access using technology. </h3><p data-v-a5bc9309${_scopeId}> The clearinghouse can store and share different types of accessibility elements, such as captions, audio description, and ASL. It makes it easier to reuse accessibility, minimizing costs for audiovisual content owners and increasing access for content users. The accessibility in the All4Access clearinghouse can be synchronized with media content anytime, anywhere, by anyone who needs it. </p>`);
          } else {
            return [
              createVNode("h3", null, [
                createTextVNode(" The "),
                createVNode("a", { href: "https://all4access.com" }, "All4Access"),
                createTextVNode(" clearinghouse aims to increase access using technology. ")
              ]),
              createVNode("p", null, " The clearinghouse can store and share different types of accessibility elements, such as captions, audio description, and ASL. It makes it easier to reuse accessibility, minimizing costs for audiovisual content owners and increasing access for content users. The accessibility in the All4Access clearinghouse can be synchronized with media content anytime, anywhere, by anyone who needs it. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Illustration. Center: 4 connectors point down from a cloud, underneath, 3 hands hold phones with the All4Access logo. Sides: 4 people look at an electronic device." loading="lazy" width="696" height="382" data-v-a5bc9309${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Illustration. Center: 4 connectors point down from a cloud, underneath, 3 hands hold phones with the All4Access logo. Sides: 4 people look at an electronic device.",
                loading: "lazy",
                width: "696",
                height: "382"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="A man puts on a hoodie. To the right, the All4access app runs on a phone." loading="lazy" width="771" height="422" data-v-a5bc9309${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "A man puts on a hoodie. To the right, the All4access app runs on a phone.",
                loading: "lazy",
                width: "771",
                height: "422"
              })
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-a5bc9309${_scopeId}> Use the All4Access app on your mobile device to synchronize and play accessibility elements associated with media content. </h3><p data-v-a5bc9309${_scopeId}> With All4Access, users can easily enjoy content with the accessibility they need (captions, audio description, ASL, etc.) regardless of where the content is played (television, streaming, movie theaters, etc.), as long as the accessibility elements are stored in the All4Access clearinghouse. People who are deaf-blind can access the caption streams using their braille display. </p><p data-v-a5bc9309${_scopeId}> The app was developed by Dicapta and\xA0the Universidad Carlos III de Madrid and was partly funded by the U.S. Department of Education under the Television Access grant. </p>`);
          } else {
            return [
              createVNode("h3", null, " Use the All4Access app on your mobile device to synchronize and play accessibility elements associated with media content. "),
              createVNode("p", null, " With All4Access, users can easily enjoy content with the accessibility they need (captions, audio description, ASL, etc.) regardless of where the content is played (television, streaming, movie theaters, etc.), as long as the accessibility elements are stored in the All4Access clearinghouse. People who are deaf-blind can access the caption streams using their braille display. "),
              createVNode("p", null, " The app was developed by Dicapta and\xA0the Universidad Carlos III de Madrid and was partly funded by the U.S. Department of Education under the Television Access grant. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/all4access.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const all4access = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5bc9309"]]);

export { all4access as default };
//# sourceMappingURL=all4access-DsI-ClL6.mjs.map
