const Users = require('../models/users');
const bcrypt = require('bcrypt');
module.exports = class UserService {
    async findAll(txn) {
        const users = await Users.query(txn);
        return users;
    }

    async create(details) {
        return await Users.query().insertGraph(details);
    }

    async findById(userId) {
        const user = await Users.query().findById(userId);
        if (user === undefined) {
            return ({"sorry": "userId " + userId + " not found!"})
        }
        return user;
    }

    async userUpdate(id, user_details) {
        console.log(user_details, id, "user_details");
        const userUpdate = await Users.query().findById(id).patch(user_details);
        return userUpdate;
    }

    async deleteById(userId) {
        console.log(userId, "userId")
        const user = await Users.query().deleteById(userId);
        return user;
        
    }
}