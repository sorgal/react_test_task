import React, { Component } from 'react';
import './App.css';
import Images from './components/Images'
// import { store } from './redux'
// import { Provider } from 'react-redux'
import { loadImages } from './redux/actions/images'
import { getImagesList } from './redux/selectors/images'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { images } = this.props
    console.log(images)
    images.map((image) => console.log(image))
    return (
      <div className="App">
        <Images url='http://media.oboobs.ru/boobs_preview/11833.jpg' />)
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
