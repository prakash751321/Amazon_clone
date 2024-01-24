import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct( {id, title, price, image, rating} ) {
    console.log(id, title)
    const [ {basket}, dispatch ] = useStateValue()
    const removefromBasket = () => {
        //  remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id : id
        })
    }

    const movetoReturns = () => {
        //  to move item to return page

        dispatch({
            type: "RETURNS",
            id
        })

    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map( (_, i) =>(
                        <p>⭐</p>
                    ) )
                }
            </div>
            <button onClick={removefromBasket}>Remove from basket</button><br />
            <button onClick={movetoReturns}>Returns & Refunds</button>    
        </div>
    </div>
  )
}

export default CheckoutProduct