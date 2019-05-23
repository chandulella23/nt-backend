var mongoose = require('mongoose')
var Order = mongoose.model('Orders')
module.exports = {
    createOrder: async (req, res) => {
        try {
            let userData = req.body;
            userData.user = req.userId;
            userData.number = Math.floor(Math.random() * 9000000000) + 1000000000;
            let newOrder = new Order(userData);
            await newOrder.save();
            return res.json({ success: true })
        } catch (err) {
            return res.json({ success: false, error: err })
        }
    },
    getOrders: async (req, res) => {
        try {
            let orders = await Order.findOne({ user: req.userId });
            return res.json({ success: true, orders: orders })
        } catch (err) {
            return res.json({ success: false, error: err })
        }
    },
    updateOrder: async (req, res) => {
        try {
            let order = await Order.findOne({ id: req.body.id, user: req.userId });
            if (order) {
                order.due_date = req.body.due_date;
                order.customer_name = req.body.customer_name;
                order.customer_address = req.body.customer_address;
                order.customer_phone = req.body.customer_phone;
                order.total = req.body.total;
                await order.save();
                return res.json({ success: true })
            }


        } catch (err) {
            return res.json({ success: false, error: err })
        }
    },
    removeOrder: async (req, res) => {
        try {
            let order = await Order.findOneAndDelete({ id: req.params.id, user: req.userId });
            if (order)
                return res.json({ success: true })
            else
                return res.json({ success: false })
        } catch (err) {
            return res.json({ success: false, error: err })
        }
    },
};