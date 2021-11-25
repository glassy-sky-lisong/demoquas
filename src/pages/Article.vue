<template>
  <q-page padding>
    article
    <article-item ref='itemRef' />
    <demo @addtab='tabHandle' ></demo>
  </q-page>
</template>

<script>
import ArticleItem from 'src/components/ArticleItem.vue'
import Demo from 'src/components/Demo.vue'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Article',
  components: { ArticleItem, Demo },
  setup () {
   const itemRef = ref(null)
   const tabHandle = (payload) => {
     console.log(payload)

     return 'hahaha'
   }

  onMounted(() => {
    itemRef.value.addTab(1)
  })

    return {
      itemRef,
      tabHandle
    }
  }
})
</script>

