import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { R as RowWithIconsAndText } from './RowWithIconsAndText-BgkV3c5G.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/consulting-workshops.webp");
const _imports_1 = publicAssetsURL("/assets/images/consulting-ada.webp");
const _sfc_main = {
  __name: "consulting",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta | Expert Accessibility Consulting Services",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Navigate media accessibility standards with Dicapta\u2019s expert consulting. From strategy to compliance, we make inclusion simple. Get professional guidance today!"
        }
      ]
    });
    const rowWithIconsArray = ref([
      {
        imageUrl: "/assets/images/consulting-tailored-icon.png",
        imageAlt: "an icon of a ruler and a pencil",
        title: "Tailor-Made",
        text: "Our programs are tailor-made to support your specific goals."
      },
      {
        imageUrl: "/assets/images/consulting-on-site-icon.png",
        imageAlt: "icon of a person doing a presentation",
        title: "On-Site",
        text: "Your staff will receive on-site training to optimize their work time."
      },
      {
        imageUrl: "/assets/images/consulting-blind.png",
        imageAlt: "icon of a blind person",
        title: "Team-Members with disabilities",
        text: "Improve your staff\u2019s empathy by working face-to-face with team-members with disabilities."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-e0eb1428><section data-v-e0eb1428><h1 class="title" data-v-e0eb1428>Consulting</h1><p class="subtitle" data-v-e0eb1428> Empowering organizations to foster a more inclusive environment for individuals with sensory disabilities. </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsArray.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-e0eb1428${_scopeId}> Our workshops are designed to educate your team on inclusion and foster good customer service for people with disabilities. </h3><p data-v-e0eb1428${_scopeId}> Our services will expand the knowledge of your employees to equip them with a comprehensive understanding of diverse perspectives. </p><ul data-v-e0eb1428${_scopeId}><li data-v-e0eb1428${_scopeId}> Promote and cultivate an environment of respect and empathy in the workplace. </li><li data-v-e0eb1428${_scopeId}> Improve interaction with people with disabilities, whether they&#39;re customers or employees. </li><li data-v-e0eb1428${_scopeId}> Understand the needs of people with disabilities to offer good interaction and customer service. </li><li data-v-e0eb1428${_scopeId}> Provide a welcoming and open environment for people with disabilities to join the team. </li></ul>`);
          } else {
            return [
              createVNode("h3", null, " Our workshops are designed to educate your team on inclusion and foster good customer service for people with disabilities. "),
              createVNode("p", null, " Our services will expand the knowledge of your employees to equip them with a comprehensive understanding of diverse perspectives. "),
              createVNode("ul", null, [
                createVNode("li", null, " Promote and cultivate an environment of respect and empathy in the workplace. "),
                createVNode("li", null, " Improve interaction with people with disabilities, whether they're customers or employees. "),
                createVNode("li", null, " Understand the needs of people with disabilities to offer good interaction and customer service. "),
                createVNode("li", null, " Provide a welcoming and open environment for people with disabilities to join the team. ")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="reunion of multiple people of different ages in a workshop." width="900" height="600" data-v-e0eb1428${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "reunion of multiple people of different ages in a workshop.",
                width: "900",
                height: "600"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="reunion of multiple people from the ADA (Americans with Disabilities)" loading="lazy" width="900" height="600" data-v-e0eb1428${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "reunion of multiple people from the ADA (Americans with Disabilities)",
                loading: "lazy",
                width: "900",
                height: "600"
              })
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-e0eb1428${_scopeId}> As part of your DEI efforts, it\u2019s crucial to include accessibility beyond basic ADA compliance. </h3><p data-v-e0eb1428${_scopeId}> Our services will expand the knowledge of your employees to equip them with a better understanding of diverse perspectives. </p><ul data-v-e0eb1428${_scopeId}><li data-v-e0eb1428${_scopeId}> The Americans with Disabilities Act (ADA) does not have specific requirements for training, but it does require employers to provide reasonable accommodations to employees with disabilities, unless doing so would pose an undue hardship. </li><li data-v-e0eb1428${_scopeId}> Employers are required to provide reasonable accommodation only for the physical or mental limitations of a qualified individual with a disability of which they are aware. Generally, it is the responsibility of the employee to inform the employer that an accommodation is needed. </li></ul>`);
          } else {
            return [
              createVNode("h3", null, " As part of your DEI efforts, it\u2019s crucial to include accessibility beyond basic ADA compliance. "),
              createVNode("p", null, " Our services will expand the knowledge of your employees to equip them with a better understanding of diverse perspectives. "),
              createVNode("ul", null, [
                createVNode("li", null, " The Americans with Disabilities Act (ADA) does not have specific requirements for training, but it does require employers to provide reasonable accommodations to employees with disabilities, unless doing so would pose an undue hardship. "),
                createVNode("li", null, " Employers are required to provide reasonable accommodation only for the physical or mental limitations of a qualified individual with a disability of which they are aware. Generally, it is the responsibility of the employee to inform the employer that an accommodation is needed. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a class="contact-button button" href="/about/contact-us" data-v-e0eb1428>Contact Us</a></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/consulting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const consulting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0eb1428"]]);

export { consulting as default };
//# sourceMappingURL=consulting-DQiDlKCD.mjs.map
