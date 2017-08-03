const express = require('express');
const router = express.Router();
const sosController = require('./sosController.js');

router.get('/', sosController.list);

router.get('/:id', sosController.show);

router.post('/', sosController.create);

router.put('/:id', sosController.update);

router.delete('/:id', sosController.remove);


module.exports = router;
