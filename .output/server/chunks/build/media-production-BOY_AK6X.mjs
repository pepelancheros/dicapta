import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { T as TwoColumns } from './TwoColumns-BE5DFbb2.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/media-production.webp");
const _sfc_main = {
  __name: "media-production",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Media Production Services for Accessible Content",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Create accessible media with ease. From concept to post-production, Dicapta\u2019s expert team delivers engaging videos that ensure your content reaches all audiences. Contact us!"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "media-production"
      }, _attrs))} data-v-816eba70><h1 class="media-production__title" data-v-816eba70>Media production</h1><p class="media-production__subtitle" data-v-816eba70> Services and Resources for People with Disabilities </p>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="A man holds a professional camera." width="250" height="250" data-v-816eba70${_scopeId}><a class="button" href="/about/contact-us" data-v-816eba70${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "A man holds a professional camera.",
                width: "250",
                height: "250"
              }),
              createVNode("a", {
                class: "button",
                href: "/about/contact-us"
              }, "Contact Us")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-816eba70${_scopeId}> A talented team of filmmakers, producers, and a production and post-production infrastructure are ready to support your next media project. </h3><p data-v-816eba70${_scopeId}> In addition to scripting and producing proprietary content for education, dissemination, and training purposes, Dicapta offers its accessibility and media expertise to support creating media content focused on disability issues. </p><p data-v-816eba70${_scopeId}> Dicapta has collaborated with organizations such as the Center on Technology and Disability \u2013 CDT, The Smith-Kettlewell Video Description Research and Development Center, and The Family Center on Technology and Disability- FCTD, among others, to produce high-quality content looking to create greater awareness and serve the community. Visit our YouTube channel to see a playlist of some of our productions. </p>`);
          } else {
            return [
              createVNode("h3", null, " A talented team of filmmakers, producers, and a production and post-production infrastructure are ready to support your next media project. "),
              createVNode("p", null, " In addition to scripting and producing proprietary content for education, dissemination, and training purposes, Dicapta offers its accessibility and media expertise to support creating media content focused on disability issues. "),
              createVNode("p", null, " Dicapta has collaborated with organizations such as the Center on Technology and Disability \u2013 CDT, The Smith-Kettlewell Video Description Research and Development Center, and The Family Center on Technology and Disability- FCTD, among others, to produce high-quality content looking to create greater awareness and serve the community. Visit our YouTube channel to see a playlist of some of our productions. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="gray-background spacing" data-v-816eba70>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-centered" data-v-816eba70${_scopeId}><iframe height="200" src="https://www.youtube.com/embed/5CBiDSiiE8U?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-816eba70${_scopeId}></iframe><h2 data-v-816eba70${_scopeId}>Isabel necesita Tecnolog\xEDa de Asistencia</h2><p data-v-816eba70${_scopeId}>SPANISH</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-centered" }, [
                createVNode("iframe", {
                  height: "200",
                  src: "https://www.youtube.com/embed/5CBiDSiiE8U?wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen"
                }),
                createVNode("h2", null, "Isabel necesita Tecnolog\xEDa de Asistencia"),
                createVNode("p", null, "SPANISH")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-centered" data-v-816eba70${_scopeId}><iframe height="200" src="https://www.youtube.com/embed/0HYBrnGgoUM?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" data-v-816eba70${_scopeId}></iframe><h2 data-v-816eba70${_scopeId}>A Teacher&#39;s View</h2><p data-v-816eba70${_scopeId}>ENGLISH</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-centered" }, [
                createVNode("iframe", {
                  height: "200",
                  src: "https://www.youtube.com/embed/0HYBrnGgoUM?wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen"
                }),
                createVNode("h2", null, "A Teacher's View"),
                createVNode("p", null, "ENGLISH")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="spacing" data-v-816eba70>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-centered" data-v-816eba70${_scopeId}><iframe height="200" src="https://www.youtube.com/embed/AZvdGSr7roA?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-816eba70${_scopeId}></iframe><h2 data-v-816eba70${_scopeId}>Lecci\xF3n de Descripci\xF3n</h2><p data-v-816eba70${_scopeId}>SPANISH</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-centered" }, [
                createVNode("iframe", {
                  height: "200",
                  src: "https://www.youtube.com/embed/AZvdGSr7roA?wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen",
                  loading: "lazy"
                }),
                createVNode("h2", null, "Lecci\xF3n de Descripci\xF3n"),
                createVNode("p", null, "SPANISH")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-centered" data-v-816eba70${_scopeId}><iframe height="200" src="https://www.youtube.com/embed/kckxSsCiaB4?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-816eba70${_scopeId}></iframe><h2 data-v-816eba70${_scopeId}>Description Tutorial</h2><p data-v-816eba70${_scopeId}>ENGLISH</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-centered" }, [
                createVNode("iframe", {
                  height: "200",
                  src: "https://www.youtube.com/embed/kckxSsCiaB4?wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen",
                  loading: "lazy"
                }),
                createVNode("h2", null, "Description Tutorial"),
                createVNode("p", null, "ENGLISH")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="gray-background spacing" data-v-816eba70>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-centered" data-v-816eba70${_scopeId}><iframe height="200" src="https://www.youtube.com/embed/wTkPkB8VzVw?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-816eba70${_scopeId}></iframe><h2 data-v-816eba70${_scopeId}>PSA &quot;Activa el CC&quot;</h2><p data-v-816eba70${_scopeId}>SPANISH</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-centered" }, [
                createVNode("iframe", {
                  height: "200",
                  src: "https://www.youtube.com/embed/wTkPkB8VzVw?wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen",
                  loading: "lazy"
                }),
                createVNode("h2", null, 'PSA "Activa el CC"'),
                createVNode("p", null, "SPANISH")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-centered" data-v-816eba70${_scopeId}><iframe height="200" src="https://www.youtube.com/embed/KTN2Jpr_LUE?wmode=transparent" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy" data-v-816eba70${_scopeId}></iframe><h2 data-v-816eba70${_scopeId}>PSA &quot;Describe so that we all can see&quot;</h2><p data-v-816eba70${_scopeId}>ENGLISH</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-centered" }, [
                createVNode("iframe", {
                  height: "200",
                  src: "https://www.youtube.com/embed/KTN2Jpr_LUE?wmode=transparent",
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen",
                  loading: "lazy"
                }),
                createVNode("h2", null, 'PSA "Describe so that we all can see"'),
                createVNode("p", null, "ENGLISH")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/media-production.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mediaProduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-816eba70"]]);

export { mediaProduction as default };
//# sourceMappingURL=media-production-BOY_AK6X.mjs.map
