const users = require("../bd/users");
function isUserValid(req, res, next) {
    try {
        const { firstName, lastName, email, password, age, city } = req.body;
        if (!firstName || !lastName || !email ||!password || !age || !city ) {
            throw new Error('Enter all data')
        }
        const emailExam = users.some(user => user.email === req.body.email)
        let  error = '';
        if (emailExam) {
             throw new Error('This email is busy !!!')
        }
        next();
    } catch (err) {
        console.log(err.message)
        res.status(400).send(err.message);
    }
}
module.exports = isUserValid;