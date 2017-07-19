import React, { Component } from 'react';
import './App.css';
import Images from './components/Images'
// import { store } from './redux'
// import { Provider } from 'react-redux'
import { loadImages } from './redux/actions/images'
import { getImagesList } from './redux/selectors/images'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.onLoadImages()
  }

  render() {
    const { images } = this.props
    return (
      <div className="App">
        {images.map((image) => <Images key={image.id} url={'http://media.oboobs.ru/' + image.preview} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: getImagesList(state)
})

const mapDispatchToProps = dispatch => ({
  onLoadImages () { dispatch(loadImages()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
