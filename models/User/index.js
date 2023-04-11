const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {v4 : uuidv4} = require('uuid')
const userType = require('../../enums/userTypeEnum');

const UserSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.UUID,
        default:uuidv4()
    },
    username: {
        type: Schema.Types.String,
        required: true,
        min:[1,'Must be at least 6, got {VALUE}'],
        max:[255]
    },
    password: {
        type: Schema.Types.String,
        required:true,
        min:[1,'Must be at least 6, got {VALUE}'],
        max:[255]
    },
    email:{
        type: Schema.Types.String,
        required:true,
        min:[1,'Must be at least 6, got {VALUE}'],
        max:[255]
    },
    userType:{
        type: Schema.Types.String,
        reqired:true,
        enum:userType
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;