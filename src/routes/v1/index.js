const express = require('express');
const { FlightMiddlewares } = require('../../middlewares/index')
const cityController = require('../../controllers/city-controller');
const flightcontroller = require('../../controllers/flight-controller');
const airportController = require('../../controllers/airport-controller');
const router = express.Router();


router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    flightcontroller.create
);

router.get('/flights', flightcontroller.getAll);
router.get('/flights/:id', flightcontroller.get);

router.patch('/flights/:id', flightcontroller.update); 

router.post('/airports', airportController.create);

module.exports = router; 