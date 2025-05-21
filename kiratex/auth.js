const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = []

const genratetoken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(users.find(user => user.username === username)){
        res.send('username already exists')
        return
    }
    users.push({
        username:username,
        password:password,
    })
    res.send('signup successfully')
})
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password)
    if(!user){ 
        res.send('username or password is incorrect')
        return
    }
    const token = genratetoken();
    user.token = token;
    res.send(token)
})

app.get('/me', (req,res)=>{
    const token = req.headers.token;
    const user = users.find(user => user.token === token)
    if(!user){
        res.send('token is invalid')
        return
    }
    res.json(user.username)
})


app.get('/users', (req, res) => {
    res.json({ users}) 
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
