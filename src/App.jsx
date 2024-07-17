import React from 'react'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './app/store'
import Header from './components/Header'
import GrandTotal from './components/GrandTotal'

const App = () => {
  return (
    <div className='container'>
    <Header/>

    {/* using provider component to pass data from store values to children components */}
    <Provider store={store}>
      
      <Cart />
      <GrandTotal/>
    </Provider>

    </div>
  )
}

export default App