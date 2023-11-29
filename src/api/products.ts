import { request } from '../request'
import { IProductsParams } from '../types/products'

export const getProducts = (params?: IProductsParams) => {
  return request.get('/products', {params})
}

export const getProductById = (id: string) => {
  return request.get(`/products/${id}`)
}
