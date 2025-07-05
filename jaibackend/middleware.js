const jwt = require("jsonwebtoken")
const JWT_SECRET = "jai";


function middleware(req, res , next){
    const token = req.headers.token
    const decode = jwt.verify(token, JWT_SECRET)
    req.userId = decode.email
    next();

}
module.exports = {
    middleware
}