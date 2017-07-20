import { DELETE_IMAGE_SUCCESS } from '../../constants/dislike_button'

export function deleteImage () {
  return dispatch => {
    // console.log(images)
    // return dispatch({ type: DELETE_IMAGE_SUCCESS })
    const promise = ({ data: images }) => {
          console.log(2)
          dispatch({ type: DELETE_IMAGE_SUCCESS, payload: images })
        }
      // .catch(({ response }) => {
      //   let error
      //   if (response) { error = response.data.error }
      //   dispatch({
      //     type: GET_IMAGES_ERROR,
      //     payload: [error].filter(n => n)
      //   })
      // })
    return promise
  }
}
