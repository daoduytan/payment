const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_MoKet6Hjhj8kbBm1idM8noGp');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ hi: 'hhah' });
});

// const keys = require('../config/keys');

app.post('/payment', async (req, res) => {
  console.log('payment request..', req.body)
   var token = req.body.stripeToken; // Using Express
   var amount = req.body.amount;

  var charge = stripe.charges.create({
    amount: amount,
    currency: "usd",
    description: "test charge",
    source: token,
  }, function(err, charge) {
   if(err) {
    console.log(err);
    res.send('Failed')
   } else {
     console.log('success payment', charge);
     res.send(charge)
   }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
