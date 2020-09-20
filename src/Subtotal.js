import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }] = useStateValue();
  //calculate basket total
  const calculateTotal = (basket) => {
    return basket.reduce((price, item) => item.price + price, 0);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of homework */}
              Subtotal({basket.length} items):{" "}
              <strong>${calculateTotal(basket)}</strong>
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
    </div>
  );
}

export default Subtotal;
