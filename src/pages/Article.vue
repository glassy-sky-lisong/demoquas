<template>
  <q-page padding>
    article
    <article-item @go-tab="() => count++" />
  </q-page>
</template>

<script>
import ArticleItem from 'src/components/ArticleItem.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Article',
  components: { ArticleItem },
  setup () {
    const count = ref(1)
    return {
      count
    }
  }
})
</script>

