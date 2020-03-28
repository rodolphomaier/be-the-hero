const express = require('express');

const OngController = require('./controllers/ongsController');
const IncidentsController = require('./controllers/incidentsController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post ('/session', SessionController.create );

routes.get ('/ongs', OngController.index);
routes.post ('/ongs', OngController.create);

routes.get ('/incidents', IncidentsController.index);
routes.post ('/incidents', IncidentsController.create);
routes.delete ('/incidents/:id',IncidentsController.delete);

routes.get ('/profile', ProfileController.index);

module.exports = routes;