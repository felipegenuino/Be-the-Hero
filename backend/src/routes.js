const express = require('express');
const {celebrate, Joi,Segments} = require('celebrate');

const OngController = require('./controllers/OngController'); 
const IncidentsController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router(); 
routes.post('/sessions', SessionController.index);

routes.get('/ongs',  OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),  OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


module.exports = routes;