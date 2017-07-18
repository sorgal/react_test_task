import { values } from 'lodash'
import { createSelector } from 'reselect'

const getImages = state => state.images

export const getImagesList = createSelector(
  getImages,
  types => values(types)
)
