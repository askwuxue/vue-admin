<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="menu of breadcrumb" :key="menu.name">
        <el-breadcrumb-item :to="{ path: '/' }">
          {{ menu.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
export default defineComponent({
  name: 'breadcrumb',
  props: {
    breadcrumb: {
      type: Array,
      required: true,
    },
  },
  components: {},
  setup(props, ctx: SetupContext) {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
