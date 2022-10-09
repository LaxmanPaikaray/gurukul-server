const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );
const slugify = require( 'slugify' );

class Student {

    initSchema() {
        const schema = new Schema( {
            'name': {
                'type': String,
                'required': true,
            },
            'registrationNo': {
                'type': String,
                'required': true,
            },
            'course': {
                'type': String,
                'required': true,
            },
            'dateOfAdmission': {
                'type': String,
                'required': true,
            },
            'courseduration': {
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
            'address': {
                'type': String,
                'required': true,
            },
            'profilePic': {
                'type': String,
                'required': true,
            },
            'certificatepic': {
                'type': String,
                'required': false,
            },
            'coursecompleted': {
                'type': Boolean,
                'required': true,
            },
            'certificateissued': {
                'type': Boolean,
                'required': true,
            },
            'certificateNo': {
                'type': String,
                'required': false
            },
            'qrCode': {
                'type': String,
                'required': true
            },
            'grade': {
                'type': String,
                'required': false
            }
        }, { 'timestamps': true })

        schema.pre( 'save', function( next ) {
            const student = this;
            return next();
        } );
        schema.plugin( uniqueValidator );
        try {
            mongoose.model( 'student', schema );
        } catch ( e ) {

        }
    }

    getInstance() {
        this.initSchema();
        return mongoose.model( 'student' );
    }
}

module.exports = { Student };