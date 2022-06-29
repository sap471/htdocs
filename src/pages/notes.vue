<script setup lang="ts"></script>

<route lang="yaml"></route>

<template>
  <div display="flex" flex="col" m="x-auto" w="screen-sm md:screen-md" p="4">
    <div display="flex" align="items-center" justify="between">
      <div display="flex" text="2xl">
        <div class="i-ri-sticky-note-line"></div>
        <span>Notes</span>
      </div>

      <button
        type="button"
        hover="border-opacity-30 text-indigo-700"
        transition="duration-200"
        border="indigo-700 solid 2 rounded-md"
        p="y-1 x-2"
      >
        Create
      </button>
    </div>

    <!-- <div display="flex" flex="col" h="full" align="center" text="center" justify="center">
      <div text="6xl yellow-200" m="x-auto" class="i-ri-error-warning-line"></div>
      <span>there is no note!</span>
    </div> -->

    <div m="y-4" p="x-1"></div>
  </div>
</template>
