const User = require("../models/User");
const Queue = require("../lib/Queue");

module.exports = { 
    
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const {name, email} = req.body;

        const user = await User.create({ name, email});

        await Queue.add({ user });

        return res.json(user);
    }
};