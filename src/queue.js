require('dotenv/config');

const Queue = require("./lib/Queue");
const RegistrationMail = require("./jobs/RegistrationMail");

Queue.process(RegistrationMail.handle);