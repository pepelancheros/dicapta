import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
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

const _imports_0 = publicAssetsURL("/assets/images/partners-in-accessibility.webp");
const _sfc_main = {
  __name: "our-partners",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dicapta Advisors | Expertise Driving Accessible Media",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover Dicapta\u2019s trusted partners and collaborators, working together to create inclusive media and drive accessibility innovations across industries."
        }
      ]
    });
    const televisionPartners = [
      "/assets/images/logos/bare-feet.png",
      "/assets/images/logos/canal22.png",
      "/assets/images/logos/crawford.png",
      "/assets/images/logos/docon.png",
      "/assets/images/logos/frp.webp",
      "/assets/images/logos/hitn.png",
      "/assets/images/logos/iampeace.png",
      "/assets/images/logos/ket.png",
      "/assets/images/logos/new-day-films.png",
      "/assets/images/logos/pov.webp",
      "/assets/images/logos/pragda.png",
      "/assets/images/logos/ptk.webp",
      "/assets/images/logos/semillitas.png",
      "/assets/images/logos/sesame-workshop.webp",
      "/assets/images/logos/spf.png",
      "/assets/images/logos/trece.png",
      "/assets/images/logos/wb.webp",
      "/assets/images/logos/wipr.png",
      "/assets/images/logos/wucf.png"
    ];
    const organizationPartners = [
      "/assets/images/logos/aph.png",
      "/assets/images/logos/acb.png",
      "/assets/images/logos/dcmp.png",
      "/assets/images/logos/deaf-blind.png",
      "/assets/images/logos/frp.webp",
      "/assets/images/logos/fcc.png",
      "/assets/images/logos/ncdb.png",
      "/assets/images/logos/teach-access.png",
      "/assets/images/logos/uc3m.png"
    ];
    const settings = {
      itemsToShow: 1,
      snapAlign: "center"
    };
    const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center"
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "partners"
      }, _attrs))} data-v-8b87334d><h1 class="partners__title" data-v-8b87334d>Television Partners</h1><p class="partners__content" data-v-8b87334d> We are fortunate to have partnerships with organizations firmly committed to accessibility, like Canal 22 Internacional, Crawford Entertainment, D\u2019Ocon Films, Fred Rogers Productions, HITN, I am Peace Short Film Forum, Kentucky Educational Television (KET), Mickela Mallozzi, New Day Films, Passport to Knowledge, POV, Semillitas, Superfest, and WIPR. They do not skimp on their efforts to support initiatives that provide access to audiences with sensory disabilities. Our work would not be possible without their generosity and receptiveness to accessibility initiatives. In the name of children with sensory disabilities, we want to thank our partners for helping us to provide equal access. Thank you for being so committed! </p>`);
      _push(ssrRenderComponent(unref(Carousel), mergeProps({ class: "partners__carousel" }, settings, {
        breakpoints,
        autoplay: 2e3,
        "wrap-around": true
      }), {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(televisionPartners, (element) => {
              _push2(ssrRenderComponent(unref(Slide), {
                class: "partners__slide",
                key: element
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item" data-v-8b87334d${_scopeId2}><img${ssrRenderAttr("src", element)} alt="" data-v-8b87334d${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          src: element,
                          alt: ""
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(televisionPartners, (element) => {
                return createVNode(unref(Slide), {
                  class: "partners__slide",
                  key: element
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel__item" }, [
                      createVNode("img", {
                        src: element,
                        alt: ""
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="partners__gray-section" data-v-8b87334d>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-8b87334d${_scopeId}>Benefits of being Our Partner include:</h3><ul data-v-8b87334d${_scopeId}><li data-v-8b87334d${_scopeId}> Making your content accessible for good to children with sensory disabilities- by giving us permission to caption and audio describe your educational content. </li><li data-v-8b87334d${_scopeId}> Being recognized through our network: consumer organizations, policymakers, and government organizations, due to your efforts in diversity and inclusion. </li><li data-v-8b87334d${_scopeId}> Additional benefits include distributing your accessible content in the school system through The Described and Captioned Media Program (DCMP) and storing your accessibility assets in the Clearinghouse &quot;All4Access.&quot; See our <a href="/projects/tv-movie-access" data-v-8b87334d${_scopeId}>TV &amp; Movie Access</a> section for additional information. </li></ul>`);
          } else {
            return [
              createVNode("h3", null, "Benefits of being Our Partner include:"),
              createVNode("ul", null, [
                createVNode("li", null, " Making your content accessible for good to children with sensory disabilities- by giving us permission to caption and audio describe your educational content. "),
                createVNode("li", null, " Being recognized through our network: consumer organizations, policymakers, and government organizations, due to your efforts in diversity and inclusion. "),
                createVNode("li", null, [
                  createTextVNode(' Additional benefits include distributing your accessible content in the school system through The Described and Captioned Media Program (DCMP) and storing your accessibility assets in the Clearinghouse "All4Access." See our '),
                  createVNode("a", { href: "/projects/tv-movie-access" }, "TV & Movie Access"),
                  createTextVNode(" section for additional information. ")
                ])
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe width="100%" height="360" src="https://www.youtube.com/embed/gd1u42TcQnA?wmode=transparent" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" data-v-8b87334d${_scopeId}></iframe><a class="button" href="/about/contact-us" data-v-8b87334d${_scopeId}>Contact Us</a>`);
          } else {
            return [
              createVNode("iframe", {
                width: "100%",
                height: "360",
                src: "https://www.youtube.com/embed/gd1u42TcQnA?wmode=transparent",
                title: "YouTube video player",
                frameborder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
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
      _push(`</div>`);
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-8b87334d${_scopeId}>Our Partners in Accessibility</h3><p data-v-8b87334d${_scopeId}> Our partners are helping us spread the word about sensory disabilities issues, campaigning to promote accessible content, publicizing the use of All4Access, and creating awareness among the general population. Follow our <a href="https://www.youtube.com/user/DICAPTA" data-v-8b87334d${_scopeId}>YouTube Channel</a>, subscribe to our Newsletter, and visit our <a href="" data-v-8b87334d${_scopeId}>Resources section</a> for updated information on our TV partners&#39; recent activity. </p>`);
          } else {
            return [
              createVNode("h3", null, "Our Partners in Accessibility"),
              createVNode("p", null, [
                createTextVNode(" Our partners are helping us spread the word about sensory disabilities issues, campaigning to promote accessible content, publicizing the use of All4Access, and creating awareness among the general population. Follow our "),
                createVNode("a", { href: "https://www.youtube.com/user/DICAPTA" }, "YouTube Channel"),
                createTextVNode(", subscribe to our Newsletter, and visit our "),
                createVNode("a", { href: "" }, "Resources section"),
                createTextVNode(" for updated information on our TV partners' recent activity. ")
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" loading="lazy" width="900" height="600" data-v-8b87334d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                loading: "lazy",
                width: "900",
                height: "600"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="organization-partners" data-v-8b87334d><h2 class="partners__title" data-v-8b87334d>Partner Organizations</h2><p class="partners__content" data-v-8b87334d> Dicapta collaborates with organizations committed to making media, information, education, entertainment, and culture accessible to all. We offer them our time, advice, and outreach capabilities; sometimes, we provide education too. </p>`);
      _push(ssrRenderComponent(unref(Carousel), mergeProps({ class: "partners__carousel organization-partners__carousel" }, settings, {
        breakpoints,
        autoplay: 2e3,
        "wrap-around": true
      }), {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(organizationPartners, (element) => {
              _push2(ssrRenderComponent(unref(Slide), {
                class: "partners__slide",
                key: element
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__item" data-v-8b87334d${_scopeId2}><img${ssrRenderAttr("src", element)} alt="bussiness logo" loading="lazy" data-v-8b87334d${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__item" }, [
                        createVNode("img", {
                          src: element,
                          alt: "bussiness logo",
                          loading: "lazy"
                        }, null, 8, ["src"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(organizationPartners, (element) => {
                return createVNode(unref(Slide), {
                  class: "partners__slide",
                  key: element
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel__item" }, [
                      createVNode("img", {
                        src: element,
                        alt: "bussiness logo",
                        loading: "lazy"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/our-partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ourPartners = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b87334d"]]);

export { ourPartners as default };
//# sourceMappingURL=our-partners-D9cRFqbz.mjs.map
