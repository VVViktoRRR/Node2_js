const users = require("../bd/users");
let  error = '';

class loginController {
    renderLogin (req, res) {
        res.render('login')
    }
     emailById (req, res ) {
         users.push({...req.body, id: users[users.length-1].id +1 });
         res.redirect('/users');
     }
}
module.exports = new loginController();