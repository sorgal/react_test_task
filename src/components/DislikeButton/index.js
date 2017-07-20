import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteImage } from '../../redux/actions/dislike_buton'
import './index.css'

class DislikeButton extends Component {
  render () {
    const { hideImage } = this.props
    return (
      <div>
        <div className='emoji' onClick={hideImage}>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  hideImage () { dispatch(deleteImage()) }
})

export default connect(mapDispatchToProps)(DislikeButton)
