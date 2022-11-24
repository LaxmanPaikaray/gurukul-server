const { Controller } = require( '../../system/controllers/Controller' );
const autoBind = require( 'auto-bind' );
const { ApplicationService } = require('../services/ApplicationService');
const { Application } = require('../models/Application');
    
const applicationService = new ApplicationService(
        new Application().getInstance()
    );

class ApplicationController extends Controller {

    constructor( service ) {
        super( service );
        autoBind( this );
    }

}

module.exports = new ApplicationController( applicationService );