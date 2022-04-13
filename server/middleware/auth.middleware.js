const jwt = require('jsonwebtoken');
const config = require('config');
const SECRET_KEY = process.env.secretKey || config.get('secretKey');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization.split('')[1];
        if (!token) {
            return res.status(401).json({message: 'Auth error'});
        }
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch(e) {
        return res.status(401).json({message: 'Auth error'});
    }
}