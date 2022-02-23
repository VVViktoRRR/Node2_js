const {Router} = require('express');
const users = require('../bd/users');
const UserController = require('../controller/userController');

const userRouter = Router();

userRouter.get( '/', UserController.renderUsers);
userRouter.get( '/:userId', UserController.getUserById )

module.exports = userRouter;