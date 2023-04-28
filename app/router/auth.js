const express = require('express');
const router = express.Router();
const controller = require('../controller/authController');
const middlewareAuth = require("../middleware/authMiddleware")

router.post('/login', controller.Login);
router.post('/register', controller.Register);

module.exports = router