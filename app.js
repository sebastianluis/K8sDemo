const express = require('express')
const app = express();
const os = require("os");
const port = 3000

app.get('/', (req, res) => {
const hostname = os.hostname();
  res.send(`Hello from ${hostname}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})