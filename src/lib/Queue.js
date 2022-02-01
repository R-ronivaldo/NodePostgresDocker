const Queue = require("bull");
const redisConfig = require("../config/redis");

const RegistrationMail = require("../jobs/RegistrationMail");

const mailQueue = new Queue(RegistrationMail.key, redisConfig);
console.log("aqui");

mailQueue.on('failed', (job) => {
    console.log('job failed', job.name, job.data);
});

module.exports = mailQueue;