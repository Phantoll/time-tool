// const jwtService = require('services/jwtService');

/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    index(req, res) {
        const username = req.param('username');
        const password = req.param('password');

        if (!username || !password) return res.status(401).json(401, {err: 'username and password required'});

        User.findOne({username}, (err, user) => {
            if (!user) return res.json(401, {err: 'invalid username or password'});

            res.json({user, token: jwtService.sign({id: user.id})})
        });
    }

};
