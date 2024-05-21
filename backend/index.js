const express = require('express');
const mongoDB = require('./db');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send(`Hello World!`);
});
const cors = require('cors');
app.use(express.json())
mongoDB()
app.use(cors({
    origin: '*'
  }));
app.use('/api', require("./routes/login"));
app.use('/api', require("./routes/request"));
app.use('/api', require("./routes/FetchEvents"));
app.use('/api',require("./routes/Club"))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });