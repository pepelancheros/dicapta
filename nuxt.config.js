export default defineNuxtConfig({
  ssr: true,

  modules: ['nuxt-strapi-blocks-renderer'],

  app: {
    head: {
      title: "Dicapta Accessible Communication Developers",
      meta: [
        {
          name: "description",
          content:
            "Dicapta is a Disabilities Collaborative Organization, Bringing Access Through the Power of Technology for All.  Join us in making the world accessible.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "preload",
          href: "/assets/fonts/montserrat-v29-latin-500.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: true,
        },
        {
          rel: "preload",
          href: "/assets/fonts/hind-v16-latin-500.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: true,
        },
        {
          rel: "preload",
          href: "/assets/images/home-banner.webp",
          as: "image",
        },
      ],
    },
  },
  css: ["~/assets/styles/base.css", "~/assets/styles/main.css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@import "~/assets/styles/sizes-system.scss";`,
        },
      },
    },
  },

  compatibilityDate: "2024-12-11",
});
