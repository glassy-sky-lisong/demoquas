<template>
  <q-page padding>
    <div class='row q-pa-md'>
      <q-btn
        :label='isSelected ? "selected" : "no-select"'
        @click="isSelected = !isSelected"
      >

      </q-btn>
    </div>
    <div class='row q-pa-md'>
      <q-table
        class='my-sticky-header-table'
        title="Treats"
        :columns="columns"
        :rows='data'
        row-key="name"
        selection="multiple"
        v-model:selected="selected"
        :selected-rows-label="getSelectedString"
        v-if='isSelected'
        virtual-scroll
        :virtual-scroll-item-size="48"
        :virtual-scroll-sticky-size-start="48"
      >
      </q-table>
      <q-table
        class='my-sticky-header-table'
        title="Treats"
        :columns="columns"
        :rows='data'
        row-key="name"
        v-else
      >
      </q-table>
    </div>
  </q-page>
</template>


<script lang='ts'>
import { columns, data } from './tableData'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Detail',
  setup () {
    const selected = ref([])
    const isSelected = ref(false)
    const getSelectedString = () => {
      return selected.value.length === 0 ? '' : `已选择${selected.value.length}个`
    }
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      columns,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
      selected,
      getSelectedString,
      isSelected
    }
  }
})
</script>

<style lang="scss">
.my-sticky-header-table {
  /* height or max-height is important */
  height: 310px;


  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: #fff;
  }


  thead tr th {
     position: sticky;
    z-index: 1;
  }

   thead tr:first-child th {
     top: 0;
   }


   /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
  }
}

</style>


