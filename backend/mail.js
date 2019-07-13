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
const sendMail = (name, organisation, email, message, cb) => {
    var final_subject;
    if (organisation == "") {
        final_subject = name + " sent a message via Home2Health";
    }
    else {
        final_subject = name + " from " + organisation + " sent a message via Home2Health"
    }
    const mailOptions = {
        from: name + "<" + email + ">",
        to: process.env.NODEMAILER_TO,
        subject: final_subject,
        text: message
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
};
module.exports = sendMail;