const Router = require('express')
const router = new Router()

const authRouter = require('./authRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const cartRouter = require('./cartRouter')


const authMiddleware = require('../middleware/authMiddleware')

router.use('/user', authRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/cart', authMiddleware , cartRouter)


module.exports = router