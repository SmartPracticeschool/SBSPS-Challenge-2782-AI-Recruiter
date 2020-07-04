const db = require('../models');

exports.UserTestScore = async (req,res, next)=>{

    try{
        let userScore = await db.UserScore.find({
            $and:[{company: req.body.c_id}, {user: req.body.user_id}]
        })
        if(userScore){
            userScore.test_score = req.body.score;
            userScore.is_mcq_completed = true
            await userScore.save()
            return res.status(200).json({
                message: 'submitted'
            })
        }else{
            return next({
                status: 404,
                message: 'test does not exist'
            })
        }
    }catch(err){
        return next({
            status: 404,
            message: err.message
        })
    }
}
exports.UserTestStatus = async (req, res, next)=>{

    try{
        let userScore = await db.UserScore.findOne({
            $and:[{company: req.params.c_id}, {user: req.params.user_id}]
        })

        if(userScore){
            res.send(userScore)
        }else{
            return next({
                status: 404,
                message: "test does not found"
            })
        }
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}