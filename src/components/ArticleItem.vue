<template>
  <div @go-tab="addTab">
    article item
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ArticleItem',
  setup () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const count = ref(1)
    const addTab = (data) => {
      console.log('add-tab',data)
    }
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      count,
      addTab
    }
  }
})
</script>
