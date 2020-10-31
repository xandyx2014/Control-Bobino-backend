const jwt = require('jsonwebtoken');
const app = require('../config/port.config');
const secretKey = app.get('jwtKey');
function auth(req, res, next) {
    const token = req.headers['authorization'];
    try {
        // console.log('token Access:', token);
        const decoded = jwt.verify(token, secretKey);
        req.auth = decoded.data;
        next();
    } catch (err) {
        // err
        console.log(err);
        return res.status(403).json({
            message: 'Autorizacion requerida'
        });
    }
}
module.exports = {
    auth
};