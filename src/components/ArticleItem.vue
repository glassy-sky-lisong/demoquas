<template>
  <div @go-tab="addTab">
    article item
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticleItem',
  setup () {

    return {
      addTab(data) {
        console.log('add-tab',data)
      }
    }
  }
})
</script>
