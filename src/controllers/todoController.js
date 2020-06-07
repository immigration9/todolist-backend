const db = require('../models/database');
const { create, update } = require('../utils/dbUtil');
const httpStatus = require('http-status-codes');
const { createError, createResponse } = require('../utils/responseUtil');

module.exports = {
  getTodosList: (req, res) => {
    const todos = db.get('todos').value();

    if (todos) {
      return res.status(httpStatus.OK).send(createResponse(todos));
    } else {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send(createError('서버에서 데이터를 가져올 수 없습니다!'));
    }
  },
  getTodo: (req, res) => {
    const todoId = req.params.id;

    const todo = db.get('todos').find({ id: todoId }).value();

    if (todo) {
      return res.status(httpStatus.OK).send(createResponse(todo));
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send(createError('맞지 않는 id값이 전달되었습니다!'));
    }
  },
  createTodo: (req, res) => {
    const { name } = req.body;

    if (name) {
      const data = db.get('todos').push(create({ name })).write();

      /**
       * @todo 확인을 해봐야하는 부분이 있다.
       */
      return res.status(httpStatus.OK).send(createResponse(data));
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send(createError('body에 유효한 name 필드를 보내야합니다!'));
    }
  },
  updateTodo: (req, res) => {
    const todoId = req.params.id;
    const { name } = req.body;

    db.get('todos').find({ id: todoId }).assign(update({ name })).write();

    const todo = db.get('todos').find({ id: todoId }).value();

    if (todo) {
      return res.status(httpStatus.OK).send(createResponse(todo));
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send(createError('해당 todo를 찾을 수 없습니다!'));
    }
  },
  deleteTodo: (req, res) => {
    const todoId = req.params.id;

    const todo = db.get('todos').find({ id: todoId }).value();

    if (!todo) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send(createError('해당 todo를 찾을 수 없습니다!'));
    }

    db.get('todos').remove({ id: todoId }).write();

    return res.status(httpStatus.OK).send(createResponse(todo));
  },
};
