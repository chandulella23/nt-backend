const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
    jwt.verify(req.headers.token, secret, function (err, user) {
        if (err) {
            return res.json({ success: false, error: err })
        }
        req.userId = user.id;
        next();
    });

};