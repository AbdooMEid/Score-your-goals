const express = require('express'); 
const router = express.Router();
const {registerUser , loginUser , getMe} = require('../controllers/user.controllers')
const {prodect} = require('../middleware/auth.middlewarw')

router.post('/' , registerUser)
router.post('/login' , loginUser)
router.get('/me' , prodect ,getMe)


module.exports = router