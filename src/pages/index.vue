<template>
  <div class="flex items-center justify-center m-auto">
    <div font-mono class="mt--20">
      <div text="4xl md:6xl">htDocs</div>
      <span class="animated">|</span>
      <Clock class="text-lg md:text-2xl" />
      <div text="md" font="italic" m="l--2 md:l--1">"from human for people"</div>
    </div>
  </div>
</template>

<style>
.animated {
  opacity: 1;
  animation: heartbeat 0.67s infinite;
}

@keyframes heartbeat {
  50% {
    opacity: 0;
  }
}
</style>
