import React, { Component } from 'react'
import DislikeButton from '../DislikeButton'
import './index.css'

export default class Image extends Component {

  render () {
    const { preview, id } = this.props
    return (
      <div>
        <div className='image'>
          <div className='image-chunk'>
            <img src={'http://media.oboobs.ru/' + preview} alt='boobs' />
          </div>
          <div className='image-chunk'>
            <DislikeButton id={id} />
          </div>
        </div>
      </div>
    )
  }
}
