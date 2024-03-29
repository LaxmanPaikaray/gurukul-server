'use strict';
const MediaController = require( '../controllers/MediaController' );
const express = require( 'express' ),
    router = express.Router();
const AuthController = require( '../controllers/AuthController' );

router.get( '/getAllImages', MediaController.getImageList );
router.get( '/:id', AuthController.checkLogin, MediaController.get );
router.post( '/', [ MediaController.upload.single( 'file' ) ], MediaController.insert );
// router.delete( '/:id', AuthController.checkLogin, MediaController.delete );



module.exports = router;
