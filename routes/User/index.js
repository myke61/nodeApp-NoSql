const express = require('express');
const router = express.Router();

const userController = require('../../controllers/User/index');


router.post('/create',userController.create);

module.exports = router;