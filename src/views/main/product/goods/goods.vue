<template>
  <div class="goods">
    <page-content :config="pageContentConfig" pageName="goods">
      <!-- TODO 图片插槽, 配置在page-content中过于耦合，应该动态的配置插槽在goods页面中 -->
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ scope.row.oldPrice + '¥' }}</template>
      <template #newPrice="scope">{{ scope.row.newPrice + '¥' }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { pageContentConfig } from '@/views/main/product/goods/config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
  },
  setup() {
    return {
      pageContentConfig,
    }
  },
})
</script>

<style scoped></style>
