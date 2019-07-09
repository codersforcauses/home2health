const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const sendMail = require('./mail');
app.use(express.static(__dirname));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.post('/email', (req, res) => {
    const {
        name,
        email,
        message
    } = req.body;
    sendMail(name, email, message, function(err, data) {
        if (err) {
            res.json({
                message: err,
                sent: false
            });
        } else {
            res.json({
                sent: true
            });
        }
    });
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, () => {
    console.log('Server is starting on PORT,', 8080);
});