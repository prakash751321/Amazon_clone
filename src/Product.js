import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, category }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //  Add items to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // id : id,
        // title : title,
        // image : image,
        // price : price,
        // rating : rating

        //  Js ES6 feature if key & value is same u can declare as below

        id,
        title,
        image,
        price,
        rating,
        category
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>Category : {category}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
