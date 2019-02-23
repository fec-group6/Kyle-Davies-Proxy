const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const port = process.env.PORT || 8080;
const cors = require('cors');
let app = express();

app.use(express.static(path.join(__dirname, '../public')));
// getting my video list
app.use(
  '/api/videos', cors(), proxy({
    target:'http://videolistservice-env.6wxafjhpca.us-west-1.elasticbeanstalk.com/',
    changeOrigin: true
  })
);
// getting the video player
app.use(
  '/video-player-service/api/get-video', cors(), proxy({
    target:'http://127.0.0.1:3001',
    changeOrigin: true
  })
);


//getting video details and comments

app.use(
  '/watch/details', cors(), proxy({
    target:'http://node-express-env.pkkg93qppn.us-west-2.elasticbeanstalk.com/',
    changeOrigin: true
  })
);

app.use(
  '/watch/suggestions', cors(), proxy({
    target:'http://node-express-env.pkkg93qppn.us-west-2.elasticbeanstalk.com/',
    changeOrigin: true
  })
);

app.use(
  '/watch/subscribe', cors(), proxy({
    target:'http://node-express-env.pkkg93qppn.us-west-2.elasticbeanstalk.com/',
    changeOrigin: true
  })
);

app.use(
  '/watch/comment', cors(), proxy({
    target:'http://node-express-env.pkkg93qppn.us-west-2.elasticbeanstalk.com/',
    changeOrigin: true
  })
);

app.use(
  '/watch/commentFeeling', cors(), proxy({
    target:'http://node-express-env.pkkg93qppn.us-west-2.elasticbeanstalk.com/',
    changeOrigin: true
  })
);





app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});