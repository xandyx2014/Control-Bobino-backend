const express = require('express');
const app = express();

app.set('port',  process.env.PORT || 3000);
app.set('jwtKey', 'oDdevj55&@aQ5E!BjBkr');

module.exports = app;
