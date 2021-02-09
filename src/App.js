import React, { Component } from 'react';
import RootRouter from './RootRouter'
import { PersistGate } from 'redux-persist/integration/react'

// import redux
import { Provider } from 'react-redux'
import {store, persistor } from './Components/Redux/Store/Store'

class App extends Component {
  constructor() {
    super();
    this.state = {

    };



  }



  render() {
    return (
      <Provider store={store}>
      <PersistGate persistor={persistor} >
        <RootRouter/>
      </PersistGate>
    </Provider>
    );
  }
}


export default App;

