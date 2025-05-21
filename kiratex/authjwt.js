const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';
const app = express();
const port = 3000;

const users=[]


app.use(express.json());

const auth = (req,res,next)=>{
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_SECRET);
    if(decoded.username){
        req.username = decoded.username;
        next();
    }
    else{
        res.status(401).json({message:'please login'})
    }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})



app.post('/signup' ,(req,res)=>{
    const {username,password} = req.body;
    const user = users.find(user=> user.username === username);
    if(user){
        res.status(400).json({message:'username already exists'})
        return;
    }
    users.push({username,password})
    res.json({message:'signup success'})

})


app.post('/signin' ,(req,res)=>{
    const {username,password} = req.body;
    const user = users.find(user=> user.username === username && user.password === password);
    if (user){
        const token = jwt.sign({
            username: user.username
        },JWT_SECRET);
        res.json({
            token: token
        })
    }
    else{
        res.status(400).json({message:'username or password is wrong'})
    }
    
})
app.get('/me' ,auth,(req,res)=>{
    
    const user = users.find(user=> user.username === req.username);
    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
    }
    else{
        res.status(401).json({message:'please login'})
    }
   
})
app.get('/users',auth, (req,res)=>{
    res.json({
        users
    })
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})