var express = require('express')
var router = express.Router()
const uuid = require('uuid')
const mongoose = require('mongoose'),
      MyUsers = require('./db.js')

//Routes for '/api/' 

router.post('/users', function (req, res) {
	console.log("in POST users")
    var newUsers = new MyUsers({
	    id: uuid.v4(),
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    newUsers.save(function (err, newUsers) {
        if (err) return console.error(err);
        res.send('Posted Users: ' + req.body.username + req.body.email)
    })
})


router.get('/users',  (req, res) => {
	console.log("in GET users")
    MyUsers.find({}, {'username': 1, 'email': 1},function (err, allUsers) {
        if (err) return console.error(err)
        res.send(allUsers)
    })
})



router.delete('/users/:id', function (req, res) {
    Users.find({id: req.params.id}).remove(function (err, obj) {
        if (err) return console.error(err)
        else {
            if (obj.result.n === 0) {
                res.send('id not found')
            } else {
                res.send('todo deleted')
            }
        }
    })
})



router.put('/users/:id', function (req, res) {

    Users.update({id: req.params.id},    //condition
                {username: req.body.username},//info updated
                //{email: req.body.	},
                function (err, obj) {
        if (err) return console.error(err);
        else {
            if (obj.n === 0) {
                res.send('id not found')
            } else {
                res.send('todo updated')
            }
        }
    })
})

module.exports = router