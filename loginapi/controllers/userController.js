const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body)
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword,
        });

        await user.save();
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            return res.json({ message: 'Invalid credentials' }).status(400);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({ message: 'Invalid credentials' });
        }

        const accessToken = jwt.sign({ username: user.username }, 'your_secret_key',{ expiresIn: "15s" });
        const rtoken = jwt.sign({ username: user.username }, 'your_refresh_token_secret',{ expiresIn: "5m" });
        res.cookie('jwt',rtoken,{ httpOnly: true, 
            sameSite: 'None', secure: true, 
            maxAge: 24 * 60 * 60 * 1000 })
        return  res.json({ accessToken});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const authenticate=(req,res,next)=>{
    const token=req.headers['authorization'];
    const accessToken = token.split(" ")[1];
    console.log(req.headers);
    if(accessToken){
        jwt.verify(accessToken,'your_secret_key',(err,user)=>{
            if(err){
                res.status(403).json({message:"invalid"})
            }else{
                req.username=user.username;
            }
        })
        //next();
        res.status(202).json({message:"success"})
    }else{
        res.status(202).json({message:"not found"})
    }
}

const refreshToken=async (req, res) => {
    try {
      const refreshToken = req.cookies?.jwt;
      //console.log(req.body)
      //console.log(req.cookies?.jwt)
  
      if (refreshToken === null) return res.sendStatus(401);
  
      jwt.verify(refreshToken, 'your_refresh_token_secret', (err, user) => {
        if (err) return res.sendStatus(403);
  
        const accessToken = jwt.sign({ username: user.username }, 'your_secret_key', {
          expiresIn: '15s', // Short-lived token
        });
  
        return res.json({ accessToken });
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


module.exports = {
    register,
    login,
    authenticate,
    refreshToken,
}