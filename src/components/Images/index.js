import React, { Component } from 'react'
import Image from '../Image'
import { loadImages } from '../../redux/actions/images'
import { getImagesList } from '../../redux/selectors/images'
import { connect } from 'react-redux'
import './index.css'

class Images extends Component {
  componentDidMount() {
    this.props.onLoadImages()
  }

  render () {
    const { images } = this.props
    const last = {last: images.length > 1 ? false : true}
    return (
      <div>
        {images.map((image) => {
          const props = { ...last, ...image }
          return (
            <Image key={image.id} { ...props } />
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: getImagesList(state)
})

const mapDispatchToProps = dispatch => ({
  onLoadImages () { dispatch(loadImages()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Images)
