const serverless = require('serverless-http');
const express = require('express');

const postRouter = require('./routes/posts');

const app = express();

app.use(express.json());

app.use('/posts', postRouter);

// 잘못된 path로 요청했을 경우
app.use((req, res) =>
  res.status(400).json({
    error: 'Bad Request',
  }),
);

app.use((err, req, res) => {
  console.error(err);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    message,
  });
});

module.exports.handler = serverless(app);
