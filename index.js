const express = require('express');
const stripe = require('stripe')('sk_test_MoKet6Hjhj8kbBm1idM8noGp');
const app = express();



app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// const keys = require('../config/keys');

app.post('/payment', async (req, res) => {
  console.log('req', req);
  // const charge = await stripe.charges.create({
  //   amount: 500,
  //   currency: 'usd',
  //   description: '$5 for 5 credits',
  //   source: req.token
  // }, function() {
  //   if(err) {
  //     console.log(err);
  //     res.send('Failed')
  //    } else {
  //      console.log('success payment', charge);
  //      res.send(charge)
  //    }
  // });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
