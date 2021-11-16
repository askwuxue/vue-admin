// TODO 正则表达式验证手机号和密码策略
export const rules = {
  name: [
    {
      required: true,
      message: 'must input',
      trigger: 'blur',
    },
    {
      min: 6,
      max: 20,
      message: 'username error',
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
