<script setup lang="ts">
useHead({
  title: 'htDocs'
})
</script>

<template>
  <div
    font-sans
    bg="white dark:dark-800"
    text="gray-800 dark:gray-50"
    transition="duration-300 delay-100"
    display="flex"
    class="min-h-screen"
  >
    <router-view />
  </div>
</template>
