import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history=useHistory();
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
        displayType={"text"}
        thousandSeperator={true}
        value={getBasketTotal(basket)}
        prefix={"$"}
      />
      <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
