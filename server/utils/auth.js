const jwt = require('jsonwebtoken');
// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

// import { jwt, secret, expiration } from '../../.env'

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization || req.body.token

    // console.log("query", req.query.token)
    // console.log("headers", req.headers.authorization)
    // console.log("body", req.body.token)

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.profile = data;
    } catch {
      console.log('Invalid token');
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ name, email, _id }) {
    const payload = { name, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
