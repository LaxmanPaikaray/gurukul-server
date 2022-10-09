'use strict';
const { Service } = require( '../../system/services/Service' );
var QRCode = require('qrcode');
const { HttpResponse } = require('../../system/helpers/HttpResponse');

class StudentService extends Service {
    constructor( model ) {
        super( model );
    }

    async insert( data ) {
        try {

            let qrData = {
                "Name": data.name,
                "Regd. No.": data.registrationNo,
                "Course": data.course,
                "Admission Date": data.dateOfAdmission,
                "Duration": data.courseduration,
                "Grade": data.grade
            }
            
            // Converting the data into base64
            const  qrCode = await QRCode.toDataURL("GURUKRUPA RESEARCH AND TRAINING CENTRE " + JSON.stringify(qrData));
            data.qrCode = qrCode;
            const item = await this.model.create( data );

            if ( item ) {
                return new HttpResponse( item );
            }
            throw new Error( 'Something wrong happened' );
            
        } catch ( error ) {
            throw error;
        }
    }

    async update( id, data ) {
        try {
            let item = await this.model.findByIdAndUpdate( id, data, { 'new': true } );

            if(data.grade) {
                let qrData = {
                    "Name": item.name,
                    "Regd. No.": item.registrationNo,
                    "Course": item.course,
                    "Admission Date": item.dateOfAdmission,
                    "Duration": item.courseduration,
                    "Grade": item.grade
                }
                
                // Converting the data into base64
                const  qrCode = await QRCode.toDataURL("GURUKRUPA RESEARCH AND TRAINING CENTRE " + JSON.stringify(qrData));
                item= await this.model.findByIdAndUpdate( id, {qrCode: qrCode}, { 'new': true } );
            }

            return new HttpResponse( item );
        } catch ( errors ) {
            throw errors;
        }
    }
}

module.exports = { StudentService };
