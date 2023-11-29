import { request } from '../request'

export const getLocations = () => {
  return request.get('/locations')
}