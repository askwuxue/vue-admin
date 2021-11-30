import { IForm } from '@/base-ui/form/types'

// 表单配置项
export const searchFormConfig: IForm = {
  formItems: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
    },
    {
      type: 'select',
      label: '爱好',
      placeholder: '请选择你的爱好',
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
      ],
    },
    {
      type: 'datepicker',
      label: '日期',
      placeholder: '请输入用户名',
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
  // // 响应式
  // colStyle: {
  //   xs: 24,
  //   sm: 24,
  //   md: 12,
  //   lg: 8,
  //   xl: 6,
  // },
}
