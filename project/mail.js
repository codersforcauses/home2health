const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 25,
    auth: {
        // What email address are we sending messages from and to?
        user: "###USERNAME###",
        pass: "###PASSWORD###"
    },
    tls: {
        rejectUnauthorized: false
    }
})
const sendMail = (name, email, message, cb) => {
    const mailOptions = {
        from: name + "<" + email + ">",
        to: "###RESEARCHER'S EMAIL###",
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