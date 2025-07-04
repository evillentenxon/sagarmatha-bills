const express = require('express');
const router = express.Router();
const dateController = require('../controller/dateController');

//DATE RELATED
router.get('/convert-to-bs', dateController.convertToBS);


module.exports = router;