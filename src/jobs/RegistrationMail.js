const Mail = require("../config/mail");

module.exports = {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Fila Teste <fila@filateste.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${user.name}, cadastro realizado com sucesso!`
        }); 
    }
};