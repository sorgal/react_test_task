import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'
import { store } from './redux'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <div className="App">
          <Image url='http://media.oboobs.ru/boobs_preview/11833.jpg' />)
        </div>
      </Provider>
    );
  }
}

export default App
