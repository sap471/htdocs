<script setup lang="ts">
const color = useColorMode();

function toggleDark() {
  color.value = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <div class="bottom-12 left-0 right-0" pos="absolute" m="x-auto">
    <div class="flex items-center justify-center space-x-2">
      <router-link to="/"><div class="i-ri-home-7-line"></div></router-link>
      <!-- <router-link to="/notes"><div class="i-ri-sticky-note-line"></div></router-link> -->
      <router-link to="/tools"><div class="i-ri-tools-fill"></div></router-link>
      <router-link to="/about"
        ><div class="i-ri-information-line"></div
      ></router-link>
      <button type="button" @click="toggleDark()">
        <div class="dark:i-ri-sun-line i-ri-moon-line"></div>
      </button>
    </div>
  </div>
</template>
