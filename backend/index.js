const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  const jokes = [
    { id: 1, title: "Title 1", joke: "1st joke" },
    { id: 2, title: "Title 2", joke: "2nd joke" },
    { id: 3, title: "Title 3", joke: "3rd joke" }
  ];
    res.send(jokes);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})