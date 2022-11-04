const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/v1/hng-task', (req, res) => {
  res.status(200).json({
    slackUsername: 'Abitech',
    backend: true,
    age: 27,
    bio: 'Am a passionate and highly driven web developer 💻.',
  });
});

app.post('/api/v1/hng-task', (req, res) => {
  let x, y;
  x = req.body.x;
  y = req.body.y;

  const operation_type = {
    addition: 'addition',
    subtraction: 'subtraction',
    multiplication: 'multiplication',
  };

  console.log(req.body);

  let result = x + y;

  res.status(201).json({
    status: 'success',
    slackUsername: 'Abitech',
    result,
    operation_type: operation_type.addition,
  });
});

module.exports = app;
