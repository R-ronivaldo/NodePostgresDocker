const User = require("../models/User");
const Mail = require("../lib/Mail");

module.exports = { 
    
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const {name, email} = req.body;

        const user = await User.create({ name, email});

        await Mail.sendMail({
            from: 'Fila Teste <fila@filateste.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${name}, cadastro realizado com sucesso!`
        });

        return res.json(user);
    }
};