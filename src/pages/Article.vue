<template>
  <q-page padding>
    article
    <article-item ref='itemRef' />
  </q-page>
</template>

<script>
import ArticleItem from 'src/components/ArticleItem.vue'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Article',
  components: { ArticleItem },
  setup () {
   const itemRef = ref(null)

  onMounted(() => {
    itemRef.value.addTab(1)
  })
   
    return {
      itemRef
    }
  }
})
</script>

