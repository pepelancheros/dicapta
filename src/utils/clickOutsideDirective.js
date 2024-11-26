export default {
  beforeMount(element, binding) {
    element.clickOutsideEvent = function (event) {
      // Check if the clicked element is neither the element
      // to which the directive is applied nor its child
      if (!(element === event.target || element.contains(event.target))) {
        // Invoke the provided method
        binding.value(event);
      }
    };
    document.addEventListener("click", element.clickOutsideEvent);
  },
  unmounted(el) {
    // Remove the event listener when the bound element is unmounted
    document.removeEventListener("click", element.clickOutsideEvent);
  },
};
