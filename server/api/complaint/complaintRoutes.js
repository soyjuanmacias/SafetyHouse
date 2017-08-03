const express = require('express');
const router = express.Router();
const complaintController = require('./complaintController.js');

router.get('/', complaintController.list);

router.get('/:id', complaintController.show);

router.post('/', complaintController.create);

router.put('/:id', complaintController.update);

router.delete('/:id', complaintController.remove);


module.exports = router;
