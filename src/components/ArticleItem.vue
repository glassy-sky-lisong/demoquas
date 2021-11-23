<template>
  <div @click="$emit('go-tab', 1)">
    article item
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleItem',
  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    'go-tab': (data) => {
      console.log(data)
      return true
    },
  }
})
</script>
