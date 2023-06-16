const express = require('express');
const controllingRouter = require('./routes/index.js');
const app = express();
const PORT = 1245;

app.use('/', controllingRouter);
app.use('/students', controllingRouter);
app.use('/students/:major', controllingRouter);

app.listen(PORT);

export default app;
