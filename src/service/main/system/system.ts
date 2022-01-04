import request from '@/service'
import { IDataType } from '../../types'

// TODO 封装性不够好，能不能像login进行封装
// 请求列表数据具有通用性
export const getList = ({ url, queryInfo }: any) => {
  return request.post<IDataType>({
    url: url,
    data: queryInfo,
  })
}

// 删除数据
export const deleteData = (url: string) => {
  return request.delete<IDataType>({
    url,
  })
}
