const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const port = process.env.PORT || 8080;
const cors = require('cors');
let app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(
  '/api/videos', cors(), proxy({
    target:'http://127.0.0.1:3000',
    changeOrigin: true
  })
);





app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});