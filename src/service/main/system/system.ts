import request from '@/service'
import { IDataType } from '../../types'

// 用户信息请求
// TODO 封装性不够好，能不能像login进行封装
export const getUserList = ({ url, queryInfo }: any) => {
  return request.post<IDataType>({
    url: url,
    data: queryInfo,
  })
}
