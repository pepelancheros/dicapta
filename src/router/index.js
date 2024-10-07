import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MissionView from "@/views/MissionView.vue";
import ConsultingView from "@/views/ConsultingView.vue";
import ServicesView from "@/views/ServicesView.vue";
import AboutView from "../views/AboutView.vue";
import AudioDescriptionView from "@/views/AudioDescriptionView.vue";
import CaptioningView from "@/views/CaptioningView.vue";
import MediaProductionView from "@/views/MediaProductionView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ResourcesView from "@/views/ResourcesView.vue";
import NewsView from "@/views/NewsView.vue";
import All4VoicingLiteView from "@/views/All4VoicingLiteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
      children: [
        {
          path: "audio-description",
          component: AudioDescriptionView,
          name: "audio description",
        },
        {
          path: "captioning",
          component: CaptioningView,
          name: "captioning",
        },
        {
          path: "consulting",
          component: ConsultingView,
          name: "consulting",
        },
        {
          path: "media-production",
          component: MediaProductionView,
          name: "media production",
        },
      ],
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      children: [
        {
          path: "all4voicing-lite",
          component: All4VoicingLiteView,
          name: "all4voicing lite",
        },
      ],
    },
    {
      path: "/resources",
      name: "resources",
      component: ResourcesView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      children: [
        {
          path: "mission",
          name: "mission",
          component: MissionView,
        },
      ],
    },
  ],
});

export default router;
