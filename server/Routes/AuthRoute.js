const { Signup, Login } = require('../Controllers/AuthController');
// 🌟 Apne userVerification controller ko import kijiye
const { userVerification } = require('../Middlewares/AuthMiddleware'); // check your path carefully
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);

// 🌟 Yeh route missing tha! Jab frontend root par POST request karega, toh yeh chalega
router.post('/', userVerification);

module.exports = router;
