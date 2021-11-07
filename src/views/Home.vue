<template>
  <div class="home">
    <el-button>Default</el-button>
    <el-button>Default</el-button>
    <el-button>Default</el-button>
    <el-button>Default</el-button>
    <el-button>Default</el-button>
    <br />
    <div>
      <el-link>el-link</el-link>
      <el-link type="success">success</el-link>
    </div>
    <div class="demo-rate-block">
      <span class="demonstration">Default</span>
      <el-rate></el-rate>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
})
</script>
