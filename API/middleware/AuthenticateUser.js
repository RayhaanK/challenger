// Authentication
const {sign, veryify} = require('jsonwebtoken')
// Two methods to get a token.^^
require('dotenv').config()

function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}

function verifyAToken(req, res, next) {
    // To prevent undefined error, place?, before your property
    try {
        // Retrieve token from req.headers
        console.log("Get token from req.header['authorization");
        const token = req.headers["authorization"]
        console.log(token);
        next()
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: e.message
        })
    }
    
}

module.exports = {
    createToken,
    verifyAToken
}
