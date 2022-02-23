const {Router} = require('express');
const users = require('../bd/users');
const errorController = require('../controller/errorController')
let  error = '';

const errorRouter = Router();

errorRouter.get('/', errorController.renderError )

module.exports = errorRouter;