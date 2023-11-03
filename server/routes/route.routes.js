const RouteController = require('../controllers/route.controller'); 
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    app.get('/api/routes',authenticate, RouteController.allRoutes);
    app.post('/api/routes', authenticate, RouteController.createNewRoute);
    app.get('/api/routes/:id', authenticate, RouteController.getOneRoute);
    app.patch('/api/routes/:id', authenticate, RouteController.updateRoute);
    app.delete('/api/routes/:id', authenticate, RouteController.deleteRoute);
}