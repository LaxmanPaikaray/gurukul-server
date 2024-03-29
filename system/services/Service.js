'use strict';
const mongoose = require( 'mongoose' );
const autoBind = require( 'auto-bind' );
const { HttpResponse } = require( '../helpers/HttpResponse' );
var EasyFtp = require ("easy-ftp");
var ftp = new EasyFtp();

var config = {

    host:'nilachal.org',
    type:'FTP',
    port:'21',
    username:'nilachal',
    password:"Fyrm052iL3"
};

class Service {
    /**
     * Base Service Layer
     * @author Laxman
     * @param model
     */
    constructor( model ) {
        this.model = model;
        autoBind( this );
    }

    async getAll( query ) {
        let { skip, limit, sortBy } = query;

        skip = skip ? Number( skip ) : 0;
        limit = limit ? Number( limit ) : 10;
        sortBy = sortBy ? sortBy : { 'createdAt': -1 };

        delete query.skip;
        delete query.limit;
        delete query.sortBy;

        if ( query._id ) {
            try {
                query._id = new mongoose.mongo.ObjectId( query._id );
            } catch ( error ) {
                throw new Error( 'Not able to generate mongoose id with content' );
            }
        }

        try {
            const items = await this.model
                    .find( query )
                    .sort( sortBy )
                    .skip( skip )
                    .limit( limit ),

                total = await this.model.countDocuments( query );

            return new HttpResponse( items, { 'totalCount': total } );
        } catch ( errors ) {
            throw errors;
        }
    }


    async get( id ) {
        try {
            const item = await this.model.findById( id );

            if ( !item ) {
                const error = new Error( 'Item not found' );

                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse( item );
        } catch ( errors ) {
            throw errors;
        }
    }

    async getByQuery( query ) {
        try {
            const item = await this.model.findOne( query );

            if ( !item ) {
                const error = new Error( 'Item not found' );

                error.statusCode = 404;
                throw error;
            }

            return new HttpResponse( item );
        } catch ( errors ) {
            throw errors;
        }
    }

    async insert( data ) {
        try {
            const item = await this.model.create( data );

            if ( item ) {
                return new HttpResponse( item );
            }
            throw new Error( 'Something wrong happened' );
            
        } catch ( error ) {
            throw error;
        }
    }

    async insertMany( data ) {
        try {
            const items = await this.model.insertMany( data );

            if ( items ) {
                return new HttpResponse( items );
            }
            throw new Error( 'Something wrong happened' );
            
        } catch ( error ) {
            throw error;
        }
    }

    async update( id, data ) {
        try {
            const item = await this.model.findByIdAndUpdate( id, data, { 'new': true } );

            return new HttpResponse( item );
        } catch ( errors ) {
            throw errors;
        }
    }

    async delete( id ) {
        try {
            const item = await this.model.findByIdAndDelete( id );

            if ( !item ) {
                const error = new Error( 'Item not found' );

                error.statusCode = 404;
                throw error;
            } else {
                return new HttpResponse( item, { 'deleted': true } );
            }
        } catch ( errors ) {
            throw errors;
        }
    }

    async transferFileToDomain(fromPath, toPath) {
        console.log("transfer file from amazon to gurukul")
        ftp.connect(config);
        console.log("ftp connected, copying from "+ fromPath + " to " + process.env.DOMAIN_UPLOAD + toPath )
        ftp.upload(fromPath, process.env.DOMAIN_UPLOAD + toPath, function(err){
            if (err){
                console.log("file upload error")
                throw err;
            } 
            console.log("file uploaded")
            ftp.close();
            console.log("connection closed")
        });
    }
}

module.exports = { Service };
