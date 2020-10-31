const jwt = require('jsonwebtoken');
const app = require('../config/port.config');
const secretKey = app.get('jwtKey');

function jwtSign(value) {
    return jwt.sign({data: value}, secretKey, { expiresIn: '10d'});
}
module.exports = {
    jwtSign
}