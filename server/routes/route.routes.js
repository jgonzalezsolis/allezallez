const RouteController = require('../controllers/route.controller'); 
module.exports = app => {
    app.get('/api/routes', RouteController.allRoutes);
    app.post('/api/routes', RouteController.createNewRoute);
    app.get('/api/routes/:id', RouteController.getOneRoute);
    app.patch('/api/routes/:id', RouteController.updateRoute);
    app.delete('/api/routes/:id', RouteController.deleteRoute);
}