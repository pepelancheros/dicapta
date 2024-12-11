import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    beforeMount(element, binding) {
      element.clickOutsideEvent = function (event) {
        // Check if the clicked element is neither the target nor its child
        if (!(element === event.target || element.contains(event.target))) {
          // Invoke the provided method
          binding.value(event);
        }
      };
      document.addEventListener("click", element.clickOutsideEvent);
    },
    unmounted(element) {
      // Remove the event listener when the element is unmounted
      document.removeEventListener("click", element.clickOutsideEvent);
    },
  });
});
