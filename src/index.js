const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const app = express();

const todos = require('./routes/todos');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/todos', todos);
app.use('/', (req, res) => {
  res.send('환영합니다! 뒤에 /todos를 붙혀서 접속해주시기 바랍니다');
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
