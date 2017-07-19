import { normalizeEntities } from '../data-utils'
import { GET_IMAGES_SUCCESS } from '../../constants/images'

const initialState = {}

export default function images (state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_SUCCESS: {
      return { ...state, ...normalizeEntities(action.payload) }
    }
    default: return state
  }
}
