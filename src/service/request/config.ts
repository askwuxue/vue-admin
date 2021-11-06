// 根据环境判断导出url
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://codewhy.org/pord'
}

export { BASE_URL }
