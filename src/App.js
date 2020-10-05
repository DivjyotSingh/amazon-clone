import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51HVMvWCWmtc6A27LnqITRcEp1uxSA3GeMoHWttIQkZTn3XNHnggb37VOt1w50hoZDLAKWgEnL3R6lUMH0zCTb13x009amZd2OK"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS ", authUser);
      if (authUser) {
        //the user just logged in or the user was logged
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
