const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );
const slugify = require( 'slugify' );

class Application {

    initSchema() {
        const schema = new Schema( {
            'name': {
                'type': String,
                'required': true,
            },
            'phone': {
                'type': String,
                'required': true,
            },
            'fatherName': {
                'type': String,
                'required': true,
            },
            'motherName': {
                'type': String,
                'required': true,
            },
            'dob': {
                'type': String,
                'required': true,
            },
            'qualificationClass': {
                'type': String,
                'required': true,
            },
            'qualificationStream': {
                'type': String,
                'required': true,
            },
            'qualificationYearOfPassing': {
                'type': String,
                'required': true,
            },
            'course': {
                'type': String,
                'required': true,
            },
            'courseDuration': {
                'type': String,
                'required': true,
            },
            'email': {
                'type': String,
                'required': false,
            },
            'gender': {
                'type': String,
                'required': true,
            },
            'caste': {
                'type': String,
                'required': true,
            },
            'region': {
                'type': String,
                'required': false
            },
            'maritalStatus': {
                'type': String,
                'required': true
            },
            'profilepic': {
                'type': String,
                'required': false
            },
            'addressAt': {
                'type': String,
                'required': false
            },
            'addressPo': {
                'type': String,
                'required': false
            },
            'addressPs': {
                'type': String,
                'required': false
            },
            'addressDist': {
                'type': String,
                'required': false
            },
            'addressPin': {
                'type': String,
                'required': false
            }
        }, { 'timestamps': true })

        schema.pre( 'save', function( next ) {
            const application = this;
            return next();
        } );
        schema.plugin( uniqueValidator );
        try {
            mongoose.model( 'application', schema );
        } catch ( e ) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model( 'application' );
    }
}

module.exports = { Application };