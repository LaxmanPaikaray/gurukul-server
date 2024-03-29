'use strict';
const path = require( 'path' );

module.exports.getConfig = () => {
    const config = {
        'MODE': 'Development',
        'PORT': process.env.PORT || 5000,
        'MONGO_URL': process.env.MONGO_URL,
        'UPLOAD_PATH': path.resolve( `${__dirname }/../studentupload` ),
        'UPLOAD_EXCEL_PATH': path.resolve( `${__dirname }/../studentupload/data` ),
        'JWT_SECRET': process.env.JWT_SECRET || 'TROGON3245S'
    };

    // Modify for Production
    if ( process.env.NODE_ENV === 'production' ) {
        config.MODE = 'Production';
    }

    return config;
};
