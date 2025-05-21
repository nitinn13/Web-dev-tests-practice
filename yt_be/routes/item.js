const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get request');
}); 

router.post('/items', (req, res) => {
    res.send('post request');
});

router.put('/items/:id', (req, res) => {
    res.send('put request');
});

router.delete('/items/:id', (req, res) => {
    res.send('delete request');
});

module.exports = router;