<script setup lang="ts">
useHead({
  title: "404 Not Found",
  meta: [],
});
</script>

<template>
  <div font-mono class="h-full w-full flex items-center justify-center m-auto">
    <div class="mt--20 text-center">
      <div
        m="b-4"
        text="6xl red-300 dark:red-500 hover:red-800"
        transition="duration-150"
      >
        404 Not Found
      </div>
      <router-link
        class="hover:text-blue-300"
        text="Back to Home"
        :to="{ path: '/' }"
      />
    </div>
  </div>
</template>
