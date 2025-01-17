const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(WebpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}));

app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

/**************************simple********************************/
router.get('/simple/get', function (req, res) {
  res.json({
    msg: 'Hello World!!!'
  });
});
/**************************simple********************************/

/**************************base********************************/
router.get('/base/get', function (req, res) {
  res.json(req.query);
});
router.post('/base/post', function (req, res) {
  res.json(req.body);
});
router.post('/base/buffer', function (req, res) {
  let msg = [];
  req.on('data', (chunks) => {
    if (chunks) {
      msg.push(chunks);
    }
  });
  req.on('end', () => {
    let buf = Buffer.concat(msg);
    res.json(buf.toJSON());
  });
});
/**************************base********************************/


/**************************error********************************/
router.get('/error/get', function (req, res) {
  if (Math.random() > 0.5) {
    res.json({
      msg: 'Hello world'
    });
  } else {
    res.status(500);
    res.end();
  }
});
router.get('/error/timeout', function (req, res) {
  setTimeout(() => {
    res.json({
      msg: 'Hello world, Timeout',
    });
  }, 5000);
});
/**************************error********************************/

/**************************extend********************************/
router.get('/extend/get', function (req, res) {
  res.json({
    msg: 'Hello World'
  });
});
router.options('/extend/options', function (req, res) {
  res.end();
});
router.delete('/extend/delete', function (req, res) {
  res.end();
});
router.head('/extend/head', function (req, res) {
  res.end();
});
router.put('/extend/put', function (req, res) {
  res.json(req.body);
});
router.patch('/extend/patch', function (req, res) {
  res.json(req.body);
});
router.post('/extend/post', function (req, res) {
  res.json(req.body);
});
/**************************extend********************************/


app.use(router); 

const port = process.env.PORT || 8080;
module.exports = app.listen(port, () => {
  console.info(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
})
