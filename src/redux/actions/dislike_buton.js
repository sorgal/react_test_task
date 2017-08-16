import { DELETE_IMAGE_SUCCESS } from '../../constants/dislike_button'

export function deleteImage () {
  return dispatch => {
    return dispatch({ type: DELETE_IMAGE_SUCCESS, payload: {} })
    // const promise = ({ data: images }) => {
    //   dispatch({ type: DELETE_IMAGE_SUCCESS, payload: {} })
    // }
    //   // .catch(({ response }) => {
    //   //   let error
    //   //   if (response) { error = response.data.error }
    //   //   dispatch({
    //   //     type: GET_IMAGES_ERROR,
    //   //     payload: [error].filter(n => n)
    //   //   })
    //   // })
    // return promise
  }
}
