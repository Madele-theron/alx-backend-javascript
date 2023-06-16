const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (request, response) => response.end('Welcome to the payment system'))
app.get('/cart/:id([0-9]+)', (request, response) => response.send(`Payment methods for cart ${request.params.id}`))
app.listen(PORT, () => console.log(`API available on localhost port ${PORT}`));

module.exports = app;
