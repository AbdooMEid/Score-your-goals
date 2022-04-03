const asyncHandler = require('express-async-handler');
const Goal = require('../model/goal.model')
const User = require('../model/userModel');


// @desc  Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req,res) =>{
    const goals = await Goal.find({user : req.user.id})
    res.status(200).json(goals)

})

// @desc  Set goals
// @route POST /api/goal
// @access Private

const setGoal =asyncHandler( async (req,res) =>{
    console.log(req.body);
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user : req.user.id
    })
    res.status(200).json(goal)

})

// @desc  Update goals
// @route PUT /api/goal/:id
// @access Private

const updateGoal =asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found');
    }

    // cheke for user

    if(!req.user){
        res.status(401)
        throw new Error('user NOt Found')
    }

    // make sure the logedin user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User Not authorized')
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id , req.body , {
        new :true,
    })
    res.status(200).json(updateGoal)

})

// @desc  Delete goal
// @route DELETE /api/goal/:id
// @access Private

const deleteGoal = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('goal not found');
    }
     // cheke for user
    if(!req.user){
        res.status(401)
        throw new Error('User Not Found')
    }
    
 
     // make sure the logedin user matches the goal user
     if(goal.user.toString() !== req.user.id){
         res.status(401)
         throw new Error('User Not authorized')
     }
   await goal.remove()
    res.status(200).json({id : req.params.id})

})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
    
}