<template>
  <article class="flex justify-around items-center">
    <section
      :class="`glass-${theme} w-36 h-36 rounded-full flex items-end justify-center overflow-hidden`"
    >
      <picture>
        <source
          media="(max-width: 499px)"
          srcset="src/assets/img/profile_192.png"
        />
        <source
          media="(min-width: 800px)"
          srcset="src/assets/img/profile_302.png"
        />
        <img
          class="w-36 h-auto rounded-full"
          src="src/assets/img/profile_302.png"
          alt="Vlad Web Portfolio"
        />
      </picture>
    </section>
    <div
      :class="`relative h-40 w-2/4 p-auto
                sm:rounded-3xl sm:p-20 text-primary flex justify-around items-center flex-col mt-4`"
    >
      <h1 class="font-bold text-xl text-center text-secondary mb-2 uppercase">
        Web developer
      </h1>
    </div>
  </article>
  <section>
    <h2 class="text-secondary text-2xl m-4">What are you looking for?</h2>
    <div class="grid grid-flow-col grid-cols-2 grid-rows-2 mx-4 gap-4">
      <button
        v-for="btn in btns"
        :key="btn"
        class="focus:outline-none text-secondary font-bold text-sm py-2.5 px-5 rounded-md border-0 border-l-8 border-blue-700"
        :class="
          selectedField === btn ? 'bg-primary border-none' : `glass-${theme}`
        "
        @click="setSelectedField(btn)"
      >
        {{ btn }}
      </button>
    </div>
    <p :class="`glass-${theme} h-full w-full mt-8 text-secondary p-4`">
      I’m a 28 year old full-stack web developer living in Spain. I pride myself
      on my eagerness and ability to learn. I have spent a lot of free time to
      become a web developer and my passion is to build modern and fast by
      default web apps. Due to my passion to solve problems, I am constantly
      growing and improving my skills. I am very passionate about my work and
      driven to satisfy my clients. My interest is to find a great team &
      projects.
    </p>
    <div :class="`glass-${theme} h-full w-full mt-8 text-secondary p-4`">
      I’m a 28 year old full-stack web developer living in Spain. I pride myself
      on my eagerness and ability to learn. I have spent a lot of free time to
      become a web developer and my passion is to build modern and fast by
      default web apps. Due to my passion to solve problems, I am constantly
      growing and improving my skills. I am very passionate about my work and
      driven to satisfy my clients. My interest is to find a great team &
      projects.
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import SelectedField from "../types/selecyedField";

export default defineComponent({
  setup() {
    const theme = inject("theme");
    const selectedField = ref<SelectedField>("ABOUT ME");
    const btns = ["ABOUT ME", "WEB EDUCATION", "SKILLS", "EXPERIENCE"];

    const setSelectedField = (field: SelectedField) => {
      selectedField.value = field;
      console.log(selectedField.value);
    };
    return {
      theme,
      btns,
      selectedField,
      setSelectedField,
    };
  },
});
</script>

<style scoped>
</style>
