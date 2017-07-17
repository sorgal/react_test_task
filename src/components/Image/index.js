import React, { Component } from 'react'
import './index.css'

export default class Image extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { url } = this.props
    return (
      <div>
        <img src={url} />
      </div>
    )
  }
}
