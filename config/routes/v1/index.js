const router = require('express').Router();
const Order = require('../../../app/controllers/orders')
const Auth = require('../../../app/controllers/auth')
const isAuthenticated = require('./../../middlewares/is_authenticated')

router.post('/auth', Auth.login);

router.post('/createOrder', isAuthenticated, Order.createOrder);
router.put('/updateOrder', isAuthenticated, Order.updateOrder);
router.get('/getOrders', isAuthenticated, Order.getOrders);
router.delete('/removeOrder/:id', isAuthenticated, Order.removeOrder);
module.exports = router
