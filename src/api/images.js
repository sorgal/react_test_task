import client from '../utils/apiClient'

export function getImages () {
  return client.get('boobs/1/10/random')
}
