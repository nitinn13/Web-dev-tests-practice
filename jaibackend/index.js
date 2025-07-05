const express = require('express');
const app = express();
const { z } = require('zod');
const {UserModel, TodoModel} = require('./db');
const  mongoose  = require('mongoose');
const jwt = require("jsonwebtoken")
const JWT_SECRET = "jai";
const {middleware} = require("./middleware")
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post("/signup", async (req, res) => {
    try {
        const reqBody = z.object({
            email: z.string().min(3),
            name: z.string(),
            password: z.string()
        })
        const parsed = reqBody.safeParse(req.body)
        if (!parsed.success) {
            res.json({
                message: "wrong input"
            })
            return;
        }
        const { email, name, password } = parsed.data
        const existing = await UserModel.findOne({ email })
        if (existing) {
            res.json({
                mess: "existing"
            })
            return
        }

        const newUser = await UserModel.create({
            email,
            name,
            password
        })

        res.json({
            message: "User created"
        })

    }
    catch (e) {
        console.log(e)
        res.json({
            e
        })

    }
})



app.post("/signin" , async (req, res)=>{
    try{
        const reqBody = z.object({
            email: z.string().min(3),
            password: z.string()
        })
        const parsed = reqBody.safeParse(req.body)
        if (!parsed.success) {
            res.json({
                message: "wrong input"
            })
            return;
        }
        const { email, password } = parsed.data;
        const user = await UserModel.findOne({email});
        if(!user){
            res.json({
                mess : "User not found"
            })
        }
        const token = jwt.sign({email}, JWT_SECRET)
        res.json({
            token 
        })
    }   
    catch(e){
        res.json({
            e
        })
    }
})

app.get("/me" , middleware, async (req, res)=>{
    const {userId} = req
    const user = await UserModel.findOne({
        email : userId
    })
    if(!user){
        res.json({
            mess : "not exist"
        })
    }
    res.json({
        user
    })
})


app.post("/todo", middleware, async (req, res) =>{
    const { title , desc} = req.body
    const newTodo = await TodoModel.create({
        title,
        desc
    })
    res.json({
        message : "Todo Craeted "
    })
})



app.get("/todo", middleware, async (req, res) =>{
    const todo = await TodoModel.find()
    res.json({
        todo
    })
})


async function main() {
    await mongoose.connect("mongodb+srv://nitinn13:k4B3vCDtmF0YFzFZ@cluster0.ibngc.mongodb.net/Jai")
    app.listen(3000, () => {
        console.log("started")
    });
}
main();