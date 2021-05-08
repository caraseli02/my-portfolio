<template>
  <div class="font-sans antialiased gradient rounded-b-lg">
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-2xl tracking-tight">Caraseli</span>
      </div>
      <themeSwitch />
      <div class="block sm:hidden">
        <spna
          @click="toggle"
          class="flex items-center px-3 py-2 rounded outline-none"
        >
          <div
            class="block w-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
            ></span>

            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-7 bg-current transform transition duration-500 ease-in-out"
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
            ></span>
          </div>
        </spna>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <div class="text-sm font-semibold sm:flex-grow">
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Services
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="#"
            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0"
            >Viev Resume</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import themeSwitch from '/src/components/themeSwitch.vue'

export default defineComponent({
  data() {
    return {
      open: false,
    }
  },
  setup(props) {
    let open = ref(false)

    function toggle() {
      open.value = !open.value
    }
    // anything returned here will be available for the rest of the component
    return { open, toggle }
  },
  components: {
    themeSwitch,
  },
})
</script>

<style scoped></style>
