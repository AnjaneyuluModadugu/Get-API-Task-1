const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
const payload ={
  userId: 1233333,
  username: "anji"
}
const secret = 'your-secret-key'; // replace with your own secret key

const token = jwt.sign(payload, secret, {expiresIn: '1h'});
console.log(token);
//res.josn(token);

jwt.verify(token, 'your-secret-key', (err, decoded)=>{
  if(err){
    console.log('not authenticated')
  }
  else{
+    console.log(decoded);
    next();
  }
})
}