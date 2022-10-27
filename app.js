const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    slackUsername: 'Abitech',
    backend: true,
    age: 27,
    biography: 'Am a passionate and highly driven web developer 💻.',
  });
});

module.exports = app;
