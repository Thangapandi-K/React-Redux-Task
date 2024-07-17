import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slices/productSlice'


// creating store to pass state and update on states to components 
const store = configureStore ({
    
    reducer: {
        product: productReducer
    }

})

export default store;