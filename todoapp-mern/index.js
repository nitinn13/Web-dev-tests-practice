const express = require('express');
const {z} = require('zod');
const bcrypt = require('bcrypt');
const { UserModel, TodoModel } = require('./db');
const {auth} = require('./auth');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';
mongoose.connect('mongodb+srv://nitinn13:k4B3vCDtmF0YFzFZ@cluster0.ibngc.mongodb.net/todo-app')

app.use(express.json());

app.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 4);
  const reqBody = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
  })

  const parsed = reqBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      message: parsed.error.issues[0].message,
    })
    return;
  }

  await UserModel.create({ 
    email: email,
    password : hashedPassword,
    name : name
  })

    res.json({
        message: 'User created successfully',
    })

});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user =  await UserModel.findOne({ email});
    if (!user) {
      res.json({
        message: 'User not found',
      })
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (passMatch) {
        const token = jwt.sign({
            id: user.id.toString(),
         }, JWT_SECRET);
        res.json({token})
    } else {
        res.status(403).json({
            message: 'Wrong password',
        })
    }
});

  
  app.post('/todo',auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;
    await TodoModel.create({ userId, title, done});

    res.json({
      message : 'todo created successfully',
    })
});


app.get('/todos', auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({ userId });
  res.json({todos})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});