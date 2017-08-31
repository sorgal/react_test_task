import { DELETE_IMAGE_SUCCESS } from '../../constants/dislike_button'

export function deleteImage (props) {
  return dispatch => {
    return dispatch({ type: DELETE_IMAGE_SUCCESS, payload: props })
  }
}
