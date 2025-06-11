const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//Error Handling
const { body, validationResult } = require('express-validator');

/*router.post('/MovieRating',taskController.AddMovieRating);
router.delete('/movies',taskController.DeleteMovie);
router.put('/MovieRating',taskController.UpdateRating);
router.get('/movies',taskController.ViewMovies);*/

router.get('/IndexPage',taskController.ViewCustomers);
router.get('/Customer/:id',taskController.ViewCustomersbyID);
router.post('/Customer',taskController.AddCustomers);

module.exports = router;
