const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const auth = require("./auth")
const sos = require('../api/sos/sosRoutes')
const house = require('../api/house/houseRoutes')
const complaint = require('../api/complaint/complaintRoutes')

router.get('/', IndexController.index)

router.use('/auth', auth)

router.use('/sos', sos)

router.use('/house', house)

router.use('/complaint', complaint)

module.exports = router
