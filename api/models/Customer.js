/**
 * Customer.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {
    attributes: {
        forename: {
            type: 'string'
        },
        surname: {
            type: 'string',
            required: true
        },
        gender: {
            type: 'string',
            isIn: ['male', 'female'],
            required: true
        }
    }
};



