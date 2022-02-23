const users = require("../bd/users");
let  error = '';

class UserController {
    renderUsers (req, res) {
        if (Object.keys(req.query).length) {
            let queryArr = [...users];
            if (req.query.city) {
                queryArr = queryArr.filter(user => user.city === req.query.city)
            }
            if (req.query.age) {
                queryArr = queryArr.filter(user => user.age === req.query.age)
            }
            res.render('users', { users: queryArr });
            return;
        }
        res.render('users', { users });
    }
    getUserById (req, res) {
    const user = users.find(user => user.id === +req.params.userId);
    if (!user) {
    error = `User with ID: ${req.params.userId} not exist`;
    res.redirect('/error')
    return;
        }
        res.render('user', { user });
    }
}
module.exports = new UserController();