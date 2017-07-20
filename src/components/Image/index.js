import React, { Component } from 'react'
import DislikeButton from '../DislikeButton'
import './index.css'

export default class Image extends Component {
  constructor (props) {
    super(props)
    this.state = {image_class: 'image-chunk'}
  }

  render () {
    const { preview, id } = this.props
    return (
      <div>
        <div className='image'>
          <div className={this.state.image_class}>
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
