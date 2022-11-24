'use strict';
const { Service } = require( '../../system/services/Service' );

class ApplicationService extends Service {
    constructor( model ) {
        super( model );
    }

}

module.exports = { ApplicationService };
