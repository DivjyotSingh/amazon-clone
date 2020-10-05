import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientsecret, setClientSecret] = useState(true);
  const stripe = useStripe();

  const elements = useElements();
  const [error, setError] = useState();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket)}`,
      });
      setClientSecret(response.data.clientsecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientsecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(false);
        setProcessing(false);
        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    //listen to card changes in the card Element
    //displays the errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : " ");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/*Payment Section - delivery address */}
        <div className="payment-section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/*Payment Section - Rewiew items*/}
        <div className="payment-section">
          <div className="payment_title">
            <h3>Rewiew Items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*Payment Section - payment method */}
        <div className="payment-section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeperator={true}
                  value={getBasketTotal(basket)}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
