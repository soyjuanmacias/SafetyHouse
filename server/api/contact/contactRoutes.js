const express = require('express')
const router = express.Router()
const contactController = require('./contactController.js')

router.get('/users', contactController.listUser)

router.get('/security', contactController.listSecurity)

router.get('/:id', contactController.showUser)

router.get('/:id', contactController.showSecurity)


module.exports = router
