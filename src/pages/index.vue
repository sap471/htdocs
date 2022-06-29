<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

let clock = ref<string>('00:00:00')
let clockInterval = ref<ReturnType<typeof setInterval>>()

const showTime = () => {
  let time = new Date()
  let [hour, min, sec] = [time.getHours(), time.getMinutes(), time.getSeconds()]

  let currentTime: string =
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (min < 10 ? '0' + min : min) +
    ':' +
    (sec < 10 ? '0' + sec : sec)

  clock.value = currentTime
}

onMounted(() => {
  clockInterval.value = setInterval(() => {
    showTime()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(clockInterval.value)
})
</script>

<template>
  <div class="h-full w-full flex items-center justify-center m-auto">
    <div class="mt--24">
      <div text="4xl md:6xl">htDocs</div>
      <div text="lg md:2xl">{{ clock }}</div>
      <div text="md" font="italic">from human for people</div>
    </div>
  </div>
</template>
