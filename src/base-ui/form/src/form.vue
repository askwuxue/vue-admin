<template>
  <div>
    <!-- 顶部插槽 -->
    <div class="header-slot">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <!-- el-col 的响应式属性 xl,sm等对应的数值，响应式时会被绑定为span -->
          <el-col v-bind="colStyle">
            <el-form-item
              :label="item.label"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template
                v-if="
                  item.type === 'input' ||
                  item.type === 'password' ||
                  item.type === 'tel'
                "
              >
                <!-- v-model="formData[`${item.filed}`]" -->
                <el-input
                  :type="item.type"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                />
              </template>
              <!-- type 属性为select -->
              <template v-else-if="item.type === 'select'">
                <!-- 双向数据绑定 -->
                <el-select
                  style="width: 100%"
                  placeholder="请选择部门"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                >
                  <el-option
                    v-for="option of item.options"
                    :key="option.value"
                    :label="option.title"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <!-- type 属性为datepicker -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  range-separator="To"
                  :model-value="modelValue[`${item.filed}`]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 底部插槽 -->
    <div class="footer-slot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormData } from '../types'
export default defineComponent({
  name: '',
  // TODO 表单的配置项抽取到一个对象中
  props: {
    formItems: {
      type: Array as PropType<IFormData[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '10px 40px',
      }),
    },
    colStyle: {
      type: Object,
      default: () => ({
        lg: 8,
      }),
    },
    modelValue: {
      type: Object,
      required: true,
    },
  },
  components: {},
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // TODO 方式一： 使用计算属性进行数据双向绑定时，等同于父组件直接传递了对象数据，计算属性的set在修改对象的某个属性时不会生效，这种方法本质上是引用了同一个对象的引用地址
    // const formData = computed({
    //   get: () => props.modelValue,
    //   set: (newValue) => {
    //     // console.log('change formData')
    //     emit('update:modelValue', newValue)
    //   },
    // })

    // TODO 方式二：使用侦听器的方式，对父组件通过v-model传递的对象数据，不直接修改，子组件维护一份数据，对子组件的数据进行监听，当子组件的input中v-model执行，监听到改变，emit到父组件，实现数据的双向绑定，但是子组件多维护了一份数据。子组件的modelValue无法及时更新？尝试使用一下ref代替reactive
    // const formData = reactive({ ...props.modelValue })
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   {
    //     deep: true,
    //   },
    // )

    // TODO 方式三，手动进行数据双向绑定
    const handleValueChange = (value: any, field: any) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    return {
      handleValueChange,
    }
  },
})
</script>

<style scoped lang="less">
.footer-slot {
  float: right;
  margin-right: 100px;
}
</style>
