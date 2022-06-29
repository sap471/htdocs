<template>
  <div class="h-full w-full flex items-center justify-center m-auto">
    <div class="mt--20 text-center">
      <div text="6xl red-800">404 Not Found</div>
      <router-link class="text-blue-900" text="Back to Home" :to="{ path: '/' }" />
    </div>
  </div>
</template>
