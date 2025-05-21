const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); 

// count of browser requests--------------------------------------

// let count =0;
// app.use(function (req, res, next) {
//     count++;
//     next();
// });


// app.get('/', (req, res) => {
//     res.send(`Hello World!`);
// });
// app.get('/count', (req, res) => {
//     res.send(count.toString()); 
// });


// todo app requests ---------------------------------------------

// let todos = []; 

// app.get("/todos", (req, res) => {
//     res.json({ todos });
// });

// app.post("/todos", (req, res) => {
//     const { task } = req.body;
//     if (!task) {
//         return res.status(400).json({ message: "Task is required" });
//     }
//     const newTodo = { id: todos.length + 1, task };
//     todos.push(newTodo);
//     res.status(201).json(newTodo);
// });

// app.delete("/todos/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     todos = todos.filter(todo => todo.id !== id);
//     res.json({ message: "Todo deleted successfully" });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});