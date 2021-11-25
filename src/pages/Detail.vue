<template>
  <q-page padding>
    <div class='row q-pa-md'>
      <q-table
        title="Treats"
        :columns="columns"
        :rows='data'
        row-key="name"
      >

      </q-table>
    </div>
  </q-page>
</template>


<script lang='ts'>
import { columns, data } from './tableData'
import { defineComponent } from 'vue'

export default defineComponent({
 name: 'Detail',
 setup () {
   return {
     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
     columns,
     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
     data
   }
 }
})
</script>


