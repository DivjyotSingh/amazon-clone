const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HVMvWCWmtc6A27LOAj3EAiLla3DptXv2gvTwoz9FStmeXw9XiSZOvRl9GR34prePEJj1874MyxejDmoZMKUw6Ha00R1QMEZfY"
);

//App config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment requesrt recieved", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  //status-ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command

exports.api = functions.https.onRequest(app);
