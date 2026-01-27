import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { R as RowWithIconsAndText } from './RowWithIconsAndText-BgkV3c5G.mjs';
import { T as TwoColumns } from './TwoColumns-BE5DFbb2.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/projects-banner.webp");
const _imports_1 = publicAssetsURL("/assets/images/gocc4all-captions.webp");
const _imports_2 = publicAssetsURL("/assets/images/apple-store.png");
const _imports_3 = publicAssetsURL("/assets/images/google-play-badge.png");
const _imports_4 = publicAssetsURL("/assets/images/dicapta-workflow-control-platform.webp");
const _imports_5 = publicAssetsURL("/assets/images/cncc.webp");
const _imports_6 = publicAssetsURL("/assets/images/img2-tecno.webp");
const _imports_7 = publicAssetsURL("/assets/images/dad-technology.webp");
const _sfc_main = {
  __name: "previous-projects",
  __ssrInlineRender: true,
  setup(__props) {
    const rowWithIconsGocc4all = ref([
      {
        icon: "lnr-alarm",
        title: "Emergency Alerts",
        text: "TIMELY DELIVERY OF GEOLOCATED ALERTS"
      },
      {
        icon: "lnr-location",
        title: "Location Sharing",
        text: "SENDING USER LOCATION TO EMERGENCY CONTACTS"
      },
      {
        icon: "lnr-tablet",
        title: "Live TV Captions",
        text: "READ CAPTIONS USING SCREEN, BRAILLE DISPLAY OR VOICE-OVER"
      }
    ]);
    const rowWithIconsManagement = ref([
      {
        icon: "lnr-cog",
        title: "Facilitates Workflow",
        text: "EASES THE CONTROL OF ALL PROCESSES"
      },
      {
        icon: "lnr-frame-contract",
        title: "Convergence",
        text: "CLIENTS CONVERGE ON THE PLATFORM"
      },
      {
        icon: "lnr-sort-amount-asc",
        title: "Structured Production",
        text: "WORKFLOW CONTROLLED IN REAL-TIME"
      }
    ]);
    const rowWithIconsOther = ref([
      {
        icon: "lnr-cloud-sync",
        title: "Cloud & Captioning",
        text: "AUTOMATED CAPTIONING SYSTEM FOR TV STATIONS"
      },
      {
        icon: "lnr-chart-bars",
        title: "CC Performance",
        text: "CAPTIONING PERFORMANCE SUPERVISOR"
      },
      {
        icon: "lnr-graduation-hat",
        title: "Educational Technologies",
        text: "DIGITAL AIDED DESCRIPTION COLLABORATIVE TOOL"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "previous-projects"
      }, _attrs))} data-v-dde3072e><section class="banner" data-v-dde3072e><img class="banner__img"${ssrRenderAttr("src", _imports_0)} alt="A hand interacts with a digital interface displaying various icons, illustrating technology and user engagement." width="1920" height="1080" data-v-dde3072e><div class="banner__text" data-v-dde3072e><h1 class="banner__text-title" data-v-dde3072e>Previous projects</h1></div></section><section data-v-dde3072e><h3 class="previous-projects__title" data-v-dde3072e>GoCC4All</h3><p class="previous-projects__subtitle" data-v-dde3072e> Delivering emergency alerts and TV captions in an accessible way </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsGocc4all.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, { class: "previous-projects__custom-two-columns" }, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-dde3072e${_scopeId}><a href="https://gocc4all.dicaptafoundation.org" data-v-dde3072e${_scopeId}>GoCC4All</a> is an app designed to deliver emergency alerts and TV captions in an accessible way to individuals with disabilities, especially those who are deaf-blind. </h3><p data-v-dde3072e${_scopeId}> The emergency module delivers geolocated alerts from the Integrated Public Warning and Warning System (IPAWS). It also permits the provision of an emergency contact, who will receive the user&#39;s extreme and severe alerts along with the user&#39;s location. Its SOS feature allows sending the user&#39;s location to the emergency contact at any time. The TV module provides access to live\xA0TV captions using a braille display or a mobile device&#39;s screen or voice-over function. Users can easily customize GoCC4ll to fit their braille display setup. </p>`);
          } else {
            return [
              createVNode("h3", null, [
                createVNode("a", { href: "https://gocc4all.dicaptafoundation.org" }, "GoCC4All"),
                createTextVNode(" is an app designed to deliver emergency alerts and TV captions in an accessible way to individuals with disabilities, especially those who are deaf-blind. ")
              ]),
              createVNode("p", null, " The emergency module delivers geolocated alerts from the Integrated Public Warning and Warning System (IPAWS). It also permits the provision of an emergency contact, who will receive the user's extreme and severe alerts along with the user's location. Its SOS feature allows sending the user's location to the emergency contact at any time. The TV module provides access to live\xA0TV captions using a braille display or a mobile device's screen or voice-over function. Users can easily customize GoCC4ll to fit their braille display setup. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="previous-projects__gocc4all-right-column" data-v-dde3072e${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Illustration. The GoCC4All app runs captions on a mobile phone\u2019s screen. Next to the phone appears a braille display and a phone with a speaker on top." loading="lazy" width="771" height="422" data-v-dde3072e${_scopeId}><div class="store-badges" data-v-dde3072e${_scopeId}><a href="https://apps.apple.com/us/app/gocc4all/id1156436201" target="_blank" rel="noopener noreferrer" data-v-dde3072e${_scopeId}><img class="apple-badge"${ssrRenderAttr("src", _imports_2)} alt="apple store badge" loading="lazy" width="120" heigth="40" data-v-dde3072e${_scopeId}></a><a href="https://play.google.com/store/apps/details?id=com.dicaptafoundation.gocc4all2" target="_blank" rel="noopener noreferrer" data-v-dde3072e${_scopeId}><img class="google-badge"${ssrRenderAttr("src", _imports_3)} alt="google play badge" loading="lazy" width="566" heigth="166" data-v-dde3072e${_scopeId}></a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "previous-projects__gocc4all-right-column" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "Illustration. The GoCC4All app runs captions on a mobile phone\u2019s screen. Next to the phone appears a braille display and a phone with a speaker on top.",
                  loading: "lazy",
                  width: "771",
                  height: "422"
                }),
                createVNode("div", { class: "store-badges" }, [
                  createVNode("a", {
                    href: "https://apps.apple.com/us/app/gocc4all/id1156436201",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    createVNode("img", {
                      class: "apple-badge",
                      src: _imports_2,
                      alt: "apple store badge",
                      loading: "lazy",
                      width: "120",
                      heigth: "40"
                    })
                  ]),
                  createVNode("a", {
                    href: "https://play.google.com/store/apps/details?id=com.dicaptafoundation.gocc4all2",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    createVNode("img", {
                      class: "google-badge",
                      src: _imports_3,
                      alt: "google play badge",
                      loading: "lazy",
                      width: "566",
                      heigth: "166"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="previous-projects__container" data-v-dde3072e> GoCc4All was developed by Dicapta Foundation, Dicapta Corporation&#39;s social enterprise, and was tested and improved in collaboration with the Hellen Keller National Center (HKNC). IPAWS is a national emergency alert system managed by the Federal Emergency Management Agency (FEMA). GoCC4All was developed with funding from the National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR) under the grant #90IFDV0004-01-00. </p></section><section data-v-dde3072e><h2 class="previous-projects__title" data-v-dde3072e>Management System</h2><p class="previous-projects__subtitle" data-v-dde3072e> Proprietary administrative platform to monitor company&#39;s workflows </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsManagement.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, null, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-dde3072e${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="Screenshot of Dicapta\u2019s administrative platform." loading="lazy" width="900" height="448" data-v-dde3072e${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("img", {
                  src: _imports_4,
                  alt: "Screenshot of Dicapta\u2019s administrative platform.",
                  loading: "lazy",
                  width: "900",
                  height: "448"
                })
              ])
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-dde3072e${_scopeId}> Dicapta developed a proprietary administrative platform to monitor the company&#39;s workflows. </h3><p data-v-dde3072e${_scopeId}> From closed captioning to audio description, accessible real-time conferences, dubbing, and subtitling, the platform facilitates control of all the processes that make up the workflow. The client, the administrator at Dicapta, and the professional and technical personnel working in the production processes converge on the platform to maintain real-time, structured production control. </p><p data-v-dde3072e${_scopeId}> The link to this platform is private and restricted to authorized personnel. </p>`);
          } else {
            return [
              createVNode("h3", null, " Dicapta developed a proprietary administrative platform to monitor the company's workflows. "),
              createVNode("p", null, " From closed captioning to audio description, accessible real-time conferences, dubbing, and subtitling, the platform facilitates control of all the processes that make up the workflow. The client, the administrator at Dicapta, and the professional and technical personnel working in the production processes converge on the platform to maintain real-time, structured production control. "),
              createVNode("p", null, " The link to this platform is private and restricted to authorized personnel. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section data-v-dde3072e><h2 class="previous-projects__title" data-v-dde3072e>Other Technologies</h2><p class="previous-projects__subtitle" data-v-dde3072e> Speech-to-Text based captioning, captioning performance, educational technologies </p>`);
      _push(ssrRenderComponent(RowWithIconsAndText, {
        class: "row-element",
        elements: rowWithIconsOther.value
      }, null, _parent));
      _push(ssrRenderComponent(TwoColumns, { class: "previous-projects__custom-two-columns" }, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-dde3072e${_scopeId}>C&amp;CC Cloud &amp; Captioning</h3><p data-v-dde3072e${_scopeId}> C&amp;CC is an inexpensive and easy way to generate captions made possible by integrating machine learning algorithms with a speech-to-text system on the cloud. The system learns from the peculiarities of a TV station and its narration style to generate the captions. </p>`);
          } else {
            return [
              createVNode("h3", null, "C&CC Cloud & Captioning"),
              createVNode("p", null, " C&CC is an inexpensive and easy way to generate captions made possible by integrating machine learning algorithms with a speech-to-text system on the cloud. The system learns from the peculiarities of a TV station and its narration style to generate the captions. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="C&amp;CC logo. the letters C &amp; C C inside a blue cloud." loading="lazy" width="696" height="382" data-v-dde3072e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_5,
                alt: "C&CC logo. the letters C & C C inside a blue cloud.",
                loading: "lazy",
                width: "696",
                height: "382"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(TwoColumns, { class: "previous-projects__custom-two-columns" }, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="Screen with captions. To the left of the screen, three sheets show statistics for accuracy, integrity, synchronicity, and average speed." loading="lazy" width="696" height="331" data-v-dde3072e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_6,
                alt: "Screen with captions. To the left of the screen, three sheets show statistics for accuracy, integrity, synchronicity, and average speed.",
                loading: "lazy",
                width: "696",
                height: "331"
              })
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-dde3072e${_scopeId}>Closed Captioning Performance Supervisor</h3><p data-v-dde3072e${_scopeId}> Our Closed Captioning Performance Supervisor reviews captions delivered in real-time by video broadcasters and provides the metrics needed to comply with federal regulations. Additionally, it gives immediate feedback if something goes wrong. </p>`);
          } else {
            return [
              createVNode("h3", null, "Closed Captioning Performance Supervisor"),
              createVNode("p", null, " Our Closed Captioning Performance Supervisor reviews captions delivered in real-time by video broadcasters and provides the metrics needed to comply with federal regulations. Additionally, it gives immediate feedback if something goes wrong. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="previous-projects__container" data-v-dde3072e> According to the Federal Communications Commission (FCC) Rule 79.1, video producers, programmers, and distributors are required to monitor and maintain records and information on activities that ensure that the delivery of closed captioning to viewers comply with the defined criteria for quality standards for closed captioning. </p>`);
      _push(ssrRenderComponent(TwoColumns, { class: "previous-projects__custom-two-columns" }, {
        "left-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-dde3072e${_scopeId}>Digital Aided Descriptions (DAD) Platform</h3><p data-v-dde3072e${_scopeId}> The Digital Aided Descriptions (DAD) web-based platform allows students to create, as a team, descriptions for images that may either be selected by a teacher or suggested by the platform. DAD promises outstanding results when used in a diverse classroom. Instead of the teacher needing to fully describe images for blind or visually impaired students, sighted children work with visually impaired children to develop comprehensive descriptions. This way, all the children involved will enhance their vocabulary while developing collaborative skills. The\xA0tool allows the teacher to monitor, read, and correct the students&#39; work in real-time. </p>`);
          } else {
            return [
              createVNode("h3", null, "Digital Aided Descriptions (DAD) Platform"),
              createVNode("p", null, " The Digital Aided Descriptions (DAD) web-based platform allows students to create, as a team, descriptions for images that may either be selected by a teacher or suggested by the platform. DAD promises outstanding results when used in a diverse classroom. Instead of the teacher needing to fully describe images for blind or visually impaired students, sighted children work with visually impaired children to develop comprehensive descriptions. This way, all the children involved will enhance their vocabulary while developing collaborative skills. The\xA0tool allows the teacher to monitor, read, and correct the students' work in real-time. ")
            ];
          }
        }),
        "right-column": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_7)} alt="A girl with headphones. Over her image, a transparent background shows a yellow banner with the letters DAD." loading="lazy" width="771" height="422" data-v-dde3072e${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_7,
                alt: "A girl with headphones. Over her image, a transparent background shows a yellow banner with the letters DAD.",
                loading: "lazy",
                width: "771",
                height: "422"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="previous-projects__container" data-v-dde3072e> Phase 1 of this project was developed with funds from a grant from the National Institute on Disability, Independent Living, and Rehabilitation Research (NIDILRR grant number 90BI0027). </p></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/previous-projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const previousProjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dde3072e"]]);

export { previousProjects as default };
//# sourceMappingURL=previous-projects-DHkDLlbW.mjs.map
