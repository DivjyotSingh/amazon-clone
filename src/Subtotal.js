import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return <div className="subtotal">
      <CurrencyFormat
          renderText={(value)=>(
             <>
                <p>
                    {/* Part of homework */}
                    Subtotal(0 items):
                    <strong>0</strong>
                </p> 
                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains gift
                </small>
            </>
          )}
          decimalScale={2}
          value={0} // part of homework
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
      />
      <button>Proceed to Checkout</button>
  </div>;
}

export default Subtotal;
