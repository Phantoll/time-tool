const bcrypt = require('bcrypt');

/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

function beforeCreate(data, next) {
    bcrypt.genSalt(5, (error, salt) => {
        if (error) return next(error);

        bcrypt.hash(data.password, salt, (err, hash) => {
            if (err) return next(err);
            data.password = hash;
            next();
        })
    });
}


module.exports = {
    attributes: {
        username: {
            type: 'string',
            unique: true
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string',
            columnName: 'encryptedPassword'
        }
    },
    beforeCreate
};

