import { IForm } from '@/base-ui/form/types'

// 表单配置项
export const modalConfig: IForm = {
  formItems: [
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
      filed: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入用户密码',
    },
    {
      filed: 'cellphone',
      type: 'tel',
      label: '电话号码',
      placeholder: '请输入电话号码',
    },
  ],
  // label宽度
  labelWidth: '120px',
  // item 样式
  itemStyle: {
    padding: '10px 40px',
  },
  // 响应式
  colStyle: {
    xs: 24,
    // sm: 24,
    // md: 12,
    // lg: 8,
    // xl: 6,
  },
}
