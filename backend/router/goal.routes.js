
const express = require('express')
const router = express.Router();
const {getGoals , setGoal , updateGoal , deleteGoal } = require('../controllers/goal.controllers')
const {prodect} = require('../middleware/auth.middlewarw')





router.route('/').get(prodect , getGoals).post(prodect ,setGoal);
router.route('/:id').delete( prodect , deleteGoal).put( prodect , updateGoal);





module.exports = router