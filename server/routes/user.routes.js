const UserController = require('../controllers/user.controllers'); 
// const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/registerUser', UserController.registerUser);
    app.post('/api/loginUser', UserController.loginUser);
    app.post('/api/logoutUser',  UserController.logoutUser);

}