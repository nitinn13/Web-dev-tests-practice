const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';


const auth = (req, res, next) => {
    const token = req.headers.token;
    const result = jwt.verify(token, JWT_SECRET);
    if(result){
      req.userId = result.id;
      next();
    }
    else{
      res.status(403).json({
        message: 'Invalid credentails'
      })
    }
  }
  module.exports ={
    auth,
    JWT_SECRET
  }