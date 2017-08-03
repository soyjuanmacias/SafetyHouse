const express = require('express');
const router = express.Router();
const alertController = require('./alertController.js');

router.get('/', alertController.list);

router.get('/:id', alertController.show);

router.post('/', alertController.create);

router.put('/:id', alertController.update);

router.delete('/:id', alertController.remove);


module.exports = router;
