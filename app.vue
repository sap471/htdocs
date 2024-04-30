<script setup lang="ts">
const global = useGlobalStore()

useHead({
  titleTemplate: (title) => (title ? title + ' - htDocs' : 'htDocs'),
  htmlAttrs: {
    class: global.darkMode ? 'dark' : 'light'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
