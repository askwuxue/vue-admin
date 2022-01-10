import request from '../../index'
import { IDataType } from '../../types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
}

export function getCategoryGoodsCount() {
  return request.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount,
  })
}

export function getCategoryGoodsSale() {
  return request.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale,
  })
}

export function getCategoryGoodsFavor() {
  return request.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor,
  })
}

export function getAddressGoodsSale() {
  return request.get<IDataType>({
    url: DashboardAPI.addressGoodsSale,
  })
}
