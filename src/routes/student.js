'use strict';
const express = require( 'express' ),
router = express.Router();
const StudentController = require('../controllers/StudentController');

router.get( '/', StudentController.getAll );
router.get( '/:id', StudentController.get );
router.post( '/getDetails', StudentController.getOneByQuery );
router.post( '/create', StudentController.insert );
router.put( '/update/:id', StudentController.update );
router.delete( '/:id', StudentController.delete );


module.exports = router;