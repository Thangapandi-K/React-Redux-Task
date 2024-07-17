import React from 'react'
import { useSelector } from 'react-redux'

const GrandTotal = () => {

    //getting datas thorugh store using UseSelector
    const cartData = useSelector((state) => state.product.productData)

    //calculating total amount using reduce method from the data obtained 
    const totalAmount = cartData.reduce((initialValue, cart) => initialValue + cart.price * (cart.quantity || 0), 0);

    //calculating total quantity using reduce method from the data obtained 
    const totalQuantity = cartData.reduce((initialValue, cart) => initialValue + (cart.quantity || 0), 0);

  return (
    <div className='sticky-bottom'>
        <div className='bg-success-subtle p-4 border border-dark row'>
                <div className='col fs-4'>
                    <b><i className="fa-solid fa-credit-card"></i> Grand Total : ${totalAmount}.00</b>
                </div>
                <div className='col fs-5'><i className="fa-solid fa-cart-shopping"></i> Total Quantity : {totalQuantity}</div>
                <div className="col text-end">
                    <button className='btn btn-primary'> <i className="fa-solid fa-cash-register"></i> Proceed to pay</button>
                </div>
            </div>
    </div>
  )
}

export default GrandTotal