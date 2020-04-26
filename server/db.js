var mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    email: String
})

const MyUsers = mongoose.model('MyUsers', usersSchema)

module.exports = MyUsers