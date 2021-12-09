import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 默认的时间格式
const FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 将UTC格式的时间转成自定义格式的时间
export function formatUTCDate(dateString: 'xxxx', format = FORMAT) {
  dayjs.extend(utc)
  return dayjs(dateString).utc().format(format)
}
