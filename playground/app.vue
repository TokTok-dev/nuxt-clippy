<template>
  <button @click="open">
    Show agent
  </button>
</template>

<script setup>
import useClippy from '../src/runtime/composables/use-clippy'

const { clippyAgent } = useClippy()
const open = () => {
  clippyAgent.value.play('GetAttention')
  clippyAgent.value.speak('Hello, I am Clippy!')
}
</script>
