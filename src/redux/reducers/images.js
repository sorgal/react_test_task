import { normalizeEntities } from '../data-utils'
import { GET_IMAGES_SUCCESS } from '../../constants/images'
import { DELETE_IMAGE_SUCCESS } from '../../constants/dislike_button'
import { omit } from 'lodash'

const initialState = {}

export default function images (state = initialState, action) {
  switch (action.type) {
    case DELETE_IMAGE_SUCCESS: {
      return omit(state, action.payload.id)
    }
    case GET_IMAGES_SUCCESS: {
      return { ...state, ...normalizeEntities(action.payload) }
    }
    default: return state
  }
}
