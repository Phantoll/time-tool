const jwt = require('jsonwebtoken');
const secret = 'loremIpsum';

module.exports = {
    sign(payload) {
        return jwt.sign(payload, secret, {expiresIn: '1.5 hrs'});
    },
    verify(token, callbackFn) {
        return jwt.verify(token, secret, {}, callbackFn);
    }
};
