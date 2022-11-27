const { Controller } = require( '../../system/controllers/Controller' );
const autoBind = require( 'auto-bind' );
const { CertificateApplyService } = require('../services/CertificateApplyService');
const { CertificateApply } = require('../models/CertificateApply');
    
const certificateApplyService = new CertificateApplyService(
        new CertificateApply().getInstance()
    );

class CertificateApplyController extends Controller {

    constructor( service ) {
        super( service );
        autoBind( this );
    }

}

module.exports = new CertificateApplyController( certificateApplyService );