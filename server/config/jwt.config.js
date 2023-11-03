const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;
// const payload = {
//     id: user._id
//     };

    // notice that we're using the SECRET_KEY from our .env file
// const userToken = jwt.sign(payload, process.env.SECRET_KEY);
  module.exports.authenticate = (req, res, next) => {
      jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
          if (err) { 
            console.log(err)
              res.status(401).json({verified: false});
            } else {
              console.log('authenticated')
              // req.user = payload
              // console.log(payload)
              next();
            }
        });
    }