const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:[true, "username already exist" ],
        required:[true, "username is required" ]
    },
    email: {
        type:String,
        unique:[true, "email already exist" ],
        required:[true, "email is required" ] 
    },
    password: {
        type:String,
        required:[true, "password is required" ],
        select: false 
    },
    Bio: String,
    profileImage: {
        type:String,
        default:"https://ik.imagekit.io/xklo2kwyw/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe_w=207&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }]
})


const userModel = mongoose.model("user", userSchema)

module.exports = userModel