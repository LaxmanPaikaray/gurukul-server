const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );
const slugify = require( 'slugify' );

class CertificateApply {

    initSchema() {
        const schema = new Schema( {
            'name': {
                'type': String,
                'required': true,
            },
            'dob': {
                'type': String,
                'required': true,
            },
            'moteherName': {
                'type': String,
                'required': true,
            },
            'fatherName': {
                'type': String,
                'required': true,
            },
            'phoneNo': {
                'type': String,
                'required': true,
            },
            'email': {
                'type': String,
                'required': true,
            },
            'dateOfAdmission': {
                'type': String,
                'required': true,
            },
            'dateOfompletion': {
                'type': String,
                'required': true,
            },
            'course': {
                'type': String,
                'required': true,
            },
            'courseduration': {
                'type': String,
                'required': true
            },
            'registrationNo': {
                'type': String,
                'required': true
            }
        }, { 'timestamps': true })

        schema.pre( 'save', function( next ) {
            const certificateApply = this;
            return next();
        } );
        schema.plugin( uniqueValidator );
        try {
            mongoose.model( 'certificateApply', schema );
        } catch ( e ) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model( 'certificateApply' );
    }
}

module.exports = { CertificateApply };