import React, { Component } from 'react';
import RootRouter from './RootRouter'
import { PersistGate } from 'redux-persist/integration/react'

// import redux
import { Provider } from 'react-redux'
import { store, persistor } from './Components/Redux/Store/Store'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

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
          <RootRouter />
        </PersistGate>
      </Provider>
    );
  }
}


export default App;

