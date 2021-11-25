<template>
  <button @click="$emit('addtab', 123)">Demo</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Demo',
})
</script>
