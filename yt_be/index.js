const express = require('express');
const app = express();
const port = 3000;

const itemRouter = require('./routes/item');

app.use('/api', itemRouter);

// app.get('/', (req, res) => {
//     res.send('get request');
// });
// app.post('/items', (req, res) => {
//     res.send('post request');
// });

// app.put('/items/:id', (req, res) => {
//     res.send('put request');
// });

// app.delete('/items/:id', (req, res) => {
//     res.send('delete request');
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});