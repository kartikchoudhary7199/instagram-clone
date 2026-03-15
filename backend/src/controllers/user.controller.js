const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")

async function followUserController(req, res) {

    const followerUsername = req.user.username
    const followeeUsername = req.params.username


    if (followeeUsername == followerUsername) {
        return res.status(400).json({
            message: "you cannot follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({
        username: followeeUsername

    })

    if(!isFolloweeExists) {
        return res.status(409).json({
            message: "user you are try to follow does not exist"
        })
    }

const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
})
   
   if (isAlreadyFollowing) {
    return res.status(200).json({
        message: `you are already following ${followeeUsername}`,
        follow: isAlreadyFollowing
    })
   }


    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: `you are now following ${followeeUsername}`,
        follow: followRecord
    })

}


async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}


async function acceptFollowRequestController(req,res){

    const requestId = req.params.id

    const request = await followModel.findByIdAndUpdate(
        requestId,
        {status:"accepted"},
        {new:true}
    )

    if(!request){
        return res.status(404).json({
            message:"follow request not found"
        })
    }

    res.status(200).json({
        message:"follow request accepted",
        request
    })
}


async function rejectFollowRequestController(req,res){

    const requestId = req.params.id

    const request = await followModel.findByIdAndUpdate(
        requestId,
        {status:"rejected"},
        {new:true}
    )

    if(!request){
        return res.status(404).json({
            message:"follow request not found"
        })
    }

    res.status(200).json({
        message:"follow request rejected",
        request
    })
}

module.exports = {
    followUserController,
    unfollowUserController,
    acceptFollowRequestController,
    rejectFollowRequestController
}