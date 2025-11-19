// webhook/index.js (Express example)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.raw({type: 'application/json'}));
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Basic in-memory store (for demo only). For production use DB.
let subscribers = [];

app.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature error', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // handle relevant events
  if (event.type === 'checkout.session.completed' || event.type === 'customer.subscription.created') {
    const data = event.data.object;
    subscribers.push({
      id: data.id,
      email: data.customer_email || data.customer,
      created: new Date().toISOString()
    });
  }
  return res.json({received: true});
});

// admin endpoint to list subscribers (protect with token in production)
app.get('/subscribers', (req, res) => {
  const token = req.headers.authorization;
  if (token !== `Bearer ${process.env.ADMIN_KEY}`) return res.status(401).send('unauth');
  res.json(subscribers);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log('webhook listening on', port));