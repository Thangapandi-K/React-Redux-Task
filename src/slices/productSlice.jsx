import { createSlice } from "@reduxjs/toolkit"
import { products } from "../products/products"

//assigning initial value
const initialState = {
  productData: [...products]
}

// creating slice for state and reducer to pass data
export const productSlice = createSlice({
  name: 'cart',
  initialState,
  //reducer action to update state
  reducers: {
    // action to increase quantity of the product in cart
    increaseQuantity: (state, action) => {

      const {productId: id, productQuantity: qua} = action.payload;

      state.productData = state.productData.map((product) => {
        
        if(product.id === id && (product.quantity || qua) < product.stock) {
          return {...product, quantity: (product.quantity || qua) + 1 }
        } else {
          return product;
        }
      
      })

    },
    // action to decrease quantity of the product in cart
    decreaseQuantity: (state, action) => {

      const {productId: id, productQuantity: qua} = action.payload;

      state.productData = state.productData.map((product) => {
        
        if(product.id === id && (product.quantity || qua) > 0) {
          return {...product, quantity: (product.quantity || qua) - 1 }
        } else {
          return product;
        }
      
      })

    },
    // action to remove product from cart
    removeAll: (state, action) => {

      state.productData = state.productData.filter(
        (product) => product.id !== action.payload
      )

    }
  }
})

export default productSlice.reducer;

export const { increaseQuantity, decreaseQuantity, removeAll } = productSlice.actions;