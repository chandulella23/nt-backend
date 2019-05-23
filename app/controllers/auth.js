const mongoose = require('mongoose')
const User = mongoose.model('Users')
const jwt = require('jsonwebtoken');
const secret = 'chandu@sai';

const self = module.exports = {
    login: async (req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email, password: req.body.password });
            if (user) {
                return res.json({
                    success: "success",
                    token: self.createToken(user),
                    userId: user._id
                });
            } else {
                return res.json({ success: false });
            }
        } catch (err) {
            return res.json({ success: false, error: err })
        }
    },
    createToken: (user) => {
        let today = new Date();
        let exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign({
            id: user._id,
            email: user.email,
            exp: parseInt(exp.getTime() / 1000),
        }, secret);
    }
};
