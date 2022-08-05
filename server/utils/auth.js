const jwt = require('jsonwebtoken');

const secret = 'secret';
const expiresIn = '2h';

module.exports = {
     authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;


        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiresIn });
            req.user = data;
        } catch{
            console.log('Invalid token');
        }

        return req;
     },
     signToken: function ({ username, _id }) {
        const payload = { username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiresIn });
     }
}