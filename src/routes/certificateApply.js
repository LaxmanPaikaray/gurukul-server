'use strict';

const CertificateApplyController = require('../controllers/CertificateApplyController');

const express = require( 'express' ),
router = express.Router();

router.get( '/', CertificateApplyController.getAll );
router.get( '/:id', CertificateApplyController.get );
router.post( '/create', CertificateApplyController.insert );
router.put( '/update/:id', CertificateApplyController.update );
router.delete( '/:id', CertificateApplyController.delete );


module.exports = router;