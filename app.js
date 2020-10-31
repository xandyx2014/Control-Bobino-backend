const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/test', require('./routes/test.route'));
app.use(require('./routes/user.route'));
app.use('/lecheria', require('./routes/calculo_lecheria.route'));
app.use('/racion', require('./routes/racion_animal.route'));
module.exports = app;