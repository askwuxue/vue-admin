// TODO 正则表达式验证手机号和密码策略
export const rules = {
  phone: [
    {
      required: true,
      message: 'must input',
      trigger: 'blur',
    },
    {
      min: 11,
      max: 11,
      message: 'Please input phone number',
      trigger: 'blur',
    },
  ],
  pass: [
    {
      required: true,
      message: 'must input',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 32,
      message: 'password error',
      trigger: 'blur',
    },
  ],
}
