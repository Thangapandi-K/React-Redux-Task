import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeAll } from '../slices/productSlice'

const Cart = () => {
  //getting datas thorugh store using UseSelector 
  const cartData = useSelector((state) => state.product.productData)

  //to update state values in store using useDispatch
  const dispatch = useDispatch();

  //using addItem function we use dispatch action to update(increase) quantity
  const addItem = (id, qua) => {
    dispatch(increaseQuantity({productId: id, productQuantity: qua}))
  }

  //using addItem function we use dispatch action to update(decrease) quantity
  const remItem = (id, qua) => {
    dispatch(decreaseQuantity({productId: id, productQuantity: qua}))
  }

  //using addItem function we use dispatch action to update(remove) product
  const removeCart = (id) => {
    dispatch(removeAll(id))
  }


  return (
    <>
    <div className='container'>
        <div className='row'>
            {cartData.length === 0 ? (<div className='text-center p-5'>Your Cart Is Empty</div>) : (
                cartData.map((product) => {

                    return (
                        <div key={product.id}>
                            <div className="card mt-4 bg-body-tertiary shadow bg-light">
                                <div className="row card-body d-flex justify-content-around">
                                    
                                    <div className='col border rounded m-2'>
                                        <img src="dummy.jpg" alt={product.title}/>
                                    </div>
                                    
                                    <div className="col p-3">
                                        <h5 className='card-title'>{product.title}</h5><br/>
                                        <p><b>Brand :</b> {product.brand}</p><br/>
                                        <p><b>Description :</b> {product.description}</p>
                                    </div>
                                    
                                    <div className="col p-3">
                                        <div>
                                            <button className="btn p-2 btn-outline-danger" onClick={()=> remItem(product.id, product.quantity || 0)}>
                                            -
                                            </button>

                                            <span className='px-3'>{product.quantity || 0 }</span>

                                            <button className="btn p-2 btn-outline-success" onClick={()=> addItem(product.id, product.quantity || 0)}>
                                            +
                                            </button>
                                        </div> <br/>
                                        <div>
                                        <span>
                                                {product.quantity == product.stock ? <div className='text-danger fw-bold'><i className="fa-solid fa-face-grin-beam-sweat"></i> Out Of Stock</div> : <div className='text-success fw-bold'><i className="fa-solid fa-face-smile"></i> In Stock : {product.stock - (product.quantity || 0)}</div>}
                                        </span>
                                        </div><br />
                                        <div>
                                            <button className='btn btn-outline-warning' onClick={()=> removeCart(product.id)}>
                                            <i className="fa-solid fa-trash"></i> Remove from cart
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="col fw-bold text-end p-5">
                                        $ {product.price}.00
                                    </div>
                                </div><hr />
                                
                                <div className='row'>
                                    <span className="col text-start p-5">
                                        <p><b><i className="fa-solid fa-cart-plus"></i> Sub-Total :</b></p><br/>
                                        <p><b><i className="fa-solid fa-truck-fast"></i> Shipping :</b></p>
                                    </span>
                                    <span className="col text-end p-5">
                                        <p><b>$ {(product.quantity || 0) * product.price}.00</b></p><br/>
                                        <p><b className='text-success'>FREE</b></p>
                                    </span>
                                </div>
                            </div>
                        </div>  
                    )
                })
            )} 
       </div>
    </div>
    </>
  )
}

export default Cart