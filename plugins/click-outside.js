export default defineNuxtPlugin((nuxtApp) => {
    return nuxtApp.vueApp.directive('click-outside', {
        beforeMount(el, binding) {
            el.clickOutsideEvent = function(event) {
                // Check if the clicked element is neither the element
                // to which the directive is applied nor its child
                if (el === event.target || el.contains(event.target)) return false

                binding.value(event);
            };
            document.addEventListener('click', el.clickOutsideEvent);
        },
        unmounted(el) {
            // Remove the event listener when the bound element is unmounted
            document.removeEventListener('click', el.clickOutsideEvent);
        },
    })
})