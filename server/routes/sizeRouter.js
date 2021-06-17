const Router = require('express')
const deviceController = require('../controllers/deviceController')
const router = new Router()

router.get('/width' , deviceController.getWidth)
router.get('/height' , deviceController.getHeight)

module.exports = router