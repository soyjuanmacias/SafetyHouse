const express = require('express');
const router = express.Router();
const houseController = require('./houseController.js');

router.get('/', houseController.list);

router.get('/:id', houseController.show);

router.post('/', houseController.create);

router.put('/:id', houseController.update);

router.delete('/:id', houseController.remove);


module.exports = router;
