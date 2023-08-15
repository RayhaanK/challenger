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
    const token = req.headers["authorization"]
    
}

module.exports = {
    createToken
}
