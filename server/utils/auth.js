const jwt = require('jsonwebtoken');

const secret = 'secret';
const expiresIn = '2h';

module.exports = {
     authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorizatoin;


        if(req.headers.authorizatoin) {
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
     signToken: function ({ username, password }) {
        const payload = { username, password};
        return jwt.sign({ data: payload }, secret, { expiresIn: expiresIn });
     }
}