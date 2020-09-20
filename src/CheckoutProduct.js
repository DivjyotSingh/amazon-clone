import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, price, title, rating }) {
    const [{basket},dispatch]=useStateValue();
    const rempoveFromBasket =()=>{
        //remove from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="chekcoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={rempoveFromBasket}>Removed from the basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
