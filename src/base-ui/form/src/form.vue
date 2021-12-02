<template>
  <div>
    <!-- form 表单 -->
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <!-- el-col 的响应式属性 xl,sm等对应的数值，响应式时会被绑定为span -->
          <el-col v-bind="colStyle">
            <el-form-item :label="item.label" :style="itemStyle">
              <!-- type属性为input和password的el-input -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :type="item.type"
                  :placeholder="item.placeholder"
                  :value="modelValue.name"
                  @input="updateModelValue"
                />
              </template>
              <!-- type 属性为select -->
              <template v-else-if="item.type === 'select'">
                <el-select placeholder="选择爱好" style="width: 100%">
                  <el-option
                    v-for="option of item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <!-- type 属性为datepicker -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from 'vue'
import { IFormData } from '../types'
export default defineComponent({
  name: '',
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
    modelValue: {},
  },
  components: {},
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const newModel = {
      name: '',
    }
    console.log('props: ', props.modelValue)
    const updateModelValue = (newValue: any) => {
      // console.log('newValue: ', newValue)
      // console.log('event: ', event)
      newModel.name = newValue
      console.log('newModel: ', newModel)
      emit('update:modelValue', newModel)
    }
    return {
      updateModelValue,
    }
  },
})
</script>

<style scoped lang="less"></style>
