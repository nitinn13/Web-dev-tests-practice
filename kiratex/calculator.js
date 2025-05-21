const express = require('express');
const app = express();
const port = 3000;

app.get('/multiply', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        result: a * b
    })
});
app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        result: a + b
    })});
app.get('/subtract', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        result: a - b
    })});
app.get('/divide', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        result: a / b
    })});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})