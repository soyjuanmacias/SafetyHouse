const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const auth = require("./auth")
const sos = require('../api/sos/sosRoutes')
const house = require('../api/house/houseRoutes')
const complaint = require('../api/complaint/complaintRoutes')
const alert = require('../api/alert/alertRoutes')
const contact = require('../api/contact/contactRoutes')

router.get('/', IndexController.index)

router.use('/auth', auth)

router.use('/sos', sos)

router.use('/house', house)

router.use('/complaint', complaint)

router.use('/alert', alert)

router.use('/contact', contact)

module.exports = router
