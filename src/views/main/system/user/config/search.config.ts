import { IForm } from '@/base-ui/form/types'

// 表单配置项
export const searchFormConfig: IForm = {
  formItems: [
    {
      filed: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id',
    },
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
    },
    {
      filed: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
    },
    {
      filed: 'cellphone',
      type: 'tel',
      label: '电话号码',
      placeholder: '请输入电话号码',
    },
    {
      filed: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        {
          title: '启用',
          value: 1,
        },
        {
          title: '禁用',
          value: 0,
        },
      ],
    },
    {
      filed: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
      },
    },
  ],
  // label宽度
  labelWidth: '120px',
  // item 样式
  itemStyle: {
    padding: '10px 40px',
  },
  // 响应式
  // colStyle: {
  //   xs: 24,
  //   sm: 24,
  //   md: 12,
  //   lg: 8,
  //   xl: 6,
  // },
}
