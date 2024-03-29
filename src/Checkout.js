import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

          {basket.length === 0 ? (<>
            <h2>Your Shopping Basket is Empty :(</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              on "Add To Basket" next to the item.
            </p>
          </>) :
            (
              <>
                
                 {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
              </>
            )
          } 


        {/* {basket?.length === 0 ? (
          <>
            <h2>Your Shopping Basket is Empty :(</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              on "Add To Basket" next to the item
            </p>
          </>
        ) : (
          <>
            <h2 className="checkout__title">
              You Have Something is Your Shopping Basket :)
            </h2>

            List out all checkout items

            {basket?.map((item) => {
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />;
            })}
          </>
        )} */}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
