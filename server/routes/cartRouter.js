const Router = require('express')
const router = new Router()

const cartController = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/' ,cartController.getCart)
router.post('/', cartController.addDeviceToCart)

module.exports = router