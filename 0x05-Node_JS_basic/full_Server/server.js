const express = require('express');
const routes = require('./routes/index');
const app = express();
const PORT = 1245;

app.use('/', routes);
app.use('/students', routes);
app.use('/students/:major', routes);

app.listen(PORT);
export default app;
