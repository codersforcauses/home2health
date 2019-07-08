require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    secure: false,
    port: 25,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})
const sendMail = (name, email, message, cb) => {
    const mailOptions = {
        from: name + "<" + email + ">",
        to: process.env.NODEMAILER_TO,
        subject: name + " sent a message via Home2Health",
        text: message
    }
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
};
module.exports = sendMail;