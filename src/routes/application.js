'use strict';

const ApplicationController = require('../controllers/ApplicationController');

const express = require( 'express' ),
router = express.Router();

router.get( '/', ApplicationController.getAll );
router.get( '/:id', ApplicationController.get );
router.post( '/create', ApplicationController.insert );
router.put( '/update/:id', ApplicationController.update );
router.delete( '/:id', ApplicationController.delete );


module.exports = router;