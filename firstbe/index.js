const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// const logging = (req, res, next) => {
//     console.log('logging started');
//     next();
// }
// app.use(logging);
// const auth = (req, res, next) => {
//     console.log('auth started');
//     next();
// }
// app.use(auth);
// const validation = (req, res, next) => {
//     console.log('validation started');
//     next();
// }
// app.use(validation);

const route = require('./routes/route');
app.use('/api',route);

app.get('/', (req, res) => {
    console.log('route hit');
    console.log(req.body);
    res.send('khushi and nitin');
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);   
})