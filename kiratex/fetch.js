const express = require('express');
const fetch = require('node-fetch');
const axios = require('axios');
const app = express();
app.use(express.json());
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = response.json();
    return data;
}
async function datausingaxios(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return response.data;
}

app.get('/fetch', async (req, res) => {
    const data = await fetchData();
    res.send(data);
});
app.get('/axios', async (req, res) => {
  const data = await datausingaxios();
  res.send(data);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});