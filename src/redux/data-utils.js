import { keyBy } from 'lodash'
// import { getCurrentPropertyId } from '../.../../utils/auth'

export function normalizeEntities (entitiesList, key = 'id') {
  return keyBy(entitiesList, key)
}
