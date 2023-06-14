const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (request, response) => response.end('Welcome to the payment system'))

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`)
})

app.get('/available_payments', (request, response) => {
  const paymentMethodObj = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  response.json(paymentMethodObj);
});

app.post('/login', (request, response) => {
    if (request.body.userName) {
        response.send(`Welcome ${request.body.userName}`);
    } else {
        response.status(404).send()
    }
});

app.listen(PORT, () => console.log(`API available on localhost port ${PORT}`));

module.exports = app;
