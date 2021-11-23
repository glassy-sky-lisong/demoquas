<template>
  <q-page class="row items-center justify-evenly">
    <div class="row  q-pa-md">
      <q-list>
        <template v-for='l in links' :key='l.name' >
          <q-item
            clickable
            @click="addTab(l)"
          >
            <q-item-label> {{ l.label }} </q-item-label>
          </q-item>
        </template>
      </q-list>
    </div>
    <div class="row q-pa-md">
      <q-tabs
        v-model="currentTab"
        inline-label
      >
        <q-route-tab
          name='first'
          to="/"
          @click.prevent="(e, go) => { go('/') }"
        >
           <template v-slot>
              <q-icon name='first' />
              <div>First</div>
              <q-icon name="close" />
            </template>
        </q-route-tab>
        <!-- <template v-for='t in tabs' :key='t.name'> -->
          <q-route-tab
            :name="t.name"
            :to='t.to'
            v-for='t in tabs' :key='t.name'
            @click.prevent="(e, go) => { go(t.to) }"
          >
            <template v-slot>
              <q-icon :name='t.icon' />
              <div>{{ t.label }}</div>
              <q-icon name="close" @click.stop="rmTab(t)" />
            </template>
          </q-route-tab>
        <!-- </template> -->
      </q-tabs>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </q-page>
</template>

<script lang="ts">
import demoData, { tabsProp } from './demoData'
import { defineComponent, ref, watch } from 'vue';
import { useRouter } from 'vue-router'


export default defineComponent({
  name: 'PageIndex',
  setup() {
    const router = useRouter()
    const tabs = ref<Array<tabsProp>>([])
    const currentTab = ref('')
    const addTab = (_tab: tabsProp) => {
      console.log(tabs.value.indexOf(_tab, 0), 'add')
      tabs.value.indexOf(_tab, 0) === -1 ? tabs.value.push(_tab) : void router.push(_tab.to || '')
      // currentTab.value = _tab.name
    }
    const rmTab = (_tab: tabsProp) => {
      const i = tabs.value.indexOf(_tab, 0)

      tabs.value.splice(i, 1)
      // currentTab.value = tabs.value.length > 0 ? tabs.value[tabs.value.length - 1].name : ''
      console.log(i, 'rm')
    }
    watch(currentTab, (n, o) => {
      console.log(n, o)
    })

    return {
      tabs,
      currentTab,
      addTab,
      rmTab,
      links: demoData
    };
  }
});
</script>
