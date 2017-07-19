import { getImages } from '../../api/images'
import { GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS, GET_IMAGES_ERROR } from '../../constants/images'

export function loadImages () {
  return dispatch => {
    dispatch({ type: GET_IMAGES_REQUEST })
    const promise = getImages()
      .then(({ data: images }) => {
        dispatch({ type: GET_IMAGES_SUCCESS, payload: images })
      })
      .catch(({ response }) => {
        let error
        if (response) { error = response.data.error }
        dispatch({
          type: GET_IMAGES_ERROR,
          payload: [error].filter(n => n)
        })
      })
    return promise
  }
}
