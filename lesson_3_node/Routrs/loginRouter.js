const {Router} = require('express');
const users = require('../bd/users');
const loginController = require('../controller/loginController')
const isUserValid = require('../middleware/isUserValid')

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin );
loginRouter.post('/', isUserValid,loginController.emailById)

module.exports = loginRouter;