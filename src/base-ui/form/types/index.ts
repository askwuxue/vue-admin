type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormData {
  filed: string
  type: IFormType
  label: string
  rules?: any
  placeholder?: string
  // 针对select的特殊配置
  options?: any[]
  // 针对特殊属性的配置，如datepicker属性的配置
  otherOptions?: any
}

// 整合所有表单配置项
export interface IForm {
  formItems: IFormData[]
  labelWidth?: string
  itemStyle?: any
  colStyle?: any
}
