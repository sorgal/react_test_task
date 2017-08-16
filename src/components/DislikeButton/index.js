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

const mapDispatchToProps = (dispatch, props) => ({
  hideImage () { dispatch(deleteImage(props)) }
})

export default connect(null, mapDispatchToProps)(DislikeButton)
