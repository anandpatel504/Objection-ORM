var express = require('express');
var router = express.Router();
const UserService = require('../services/users');
const Services = new UserService();

// welcome
router.get('/', async function(req, res, next) {
    res.send('Welcome user:)');
});

// create users
router.post('/signup', async function(req, res, next) {
    await Services.create(req.body).then((data) => {
        console.log(data, "user data");
        res.send({"success": "details register successfully"});
    }).catch((err) => {
        res.send(err);
    })
});
  
// get users
router.get('/users', async function(req, res, next) {
    const users = await Services.findAll();
    console.log(users, "hello users");
    res.send(users);
});

// get user by id
router.get('/user/:id', async function(req, res, next) {
    const userId = req.params.id;
    await Services.findById(userId).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err)
    });
});

// update user
router.put('/update_user/:id', async function(req, res, next) {
    const userId = req.params.id;
    await Services.userUpdate(userId, req.body).then((data) => {
        console.log(data, "data");
        if (data > 0) {
            res.send({"success": `Id ${userId} details updated`});
        } else {
            res.send({"sorry": `Id ${userId} not found!`});
        }
    }).catch((err) => {
        res.send(err);
    })
});

// delete user
router.delete('/user/:id', async function(req, res, next) {
    const userId = req.params.id;
    await Services.deleteById(userId).then((data) => {
        console.log(data, 'd');
        if (data > 0) {
            res.send({'success': `Id ${userId} deleted successfully`});
        } else {
            res.send({"sorry": `Id ${userId} not exist!`})
        }
    }).catch((err) => {
        res.send(err);
    })
});

module.exports = router;