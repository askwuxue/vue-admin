<template>
  <div class="user">
    <page-search></page-search>
  </div>
</template>

<script lang="ts">
import PageSearch from '@/components/page-search'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      url: '/users/list',
      queryInfo: {
        offset: 0,
        size: 100,
      },
    })
    return {}
  },
})
</script>

<style scoped></style>
