<template>
  <q-page class="row items-center justify-evenly">
    <div class="row">
    </div>
    <div class="row">
      <router-link></router-link>
    </div>
  </q-page>
</template>

<script lang="ts">
import demoData, { tabsProp } from './demoData'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const tabs = ref<Array<tabsProp>>(desmoData)
    const currentTab = ref(tabs.value.slice(0, 1))
    return {
      tabs,
      currentTab
    };
  }
});
</script>
