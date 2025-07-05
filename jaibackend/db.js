const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email : String,
    name : String,
    password : String

})

const Todo = new Schema({
    title : String, 
    desc : String,
    checkmark : { type: Boolean, default : false}
})


const UserModel = mongoose.model("User" , User)
const TodoModel = mongoose.model("todo", Todo)

module.exports = {
    UserModel,
    TodoModel
}