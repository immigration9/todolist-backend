# Todolist Server

접속 Endpoint: https://todolist-anthony-backend.herokuapp.com/

## Todolist 목록 전체 가져오기

### URL

(GET) /todos

### Response Example

전체 todo 데이터 목록을 가져온다.

```json
[
  {
    "name": "hello, world!",
    "id": "dSs2wEtwD",
    "createdAt": "2020-06-07T05:17:54.944Z",
    "updatedAt": "2020-06-07T05:17:54.944Z"
  },
  {
    "name": "goodbye for now!",
    "id": "beR3wtt8F",
    "createdAt": "2020-06-07T06:17:54.944Z",
    "updatedAt": "2020-06-07T06:17:54.944Z"
  }
]
```

## 특정 Todo 가져오기

### URL

(GET) /todos/:id

### Response Example

id값에 맞는 todo 데이터를 가져온다.

```json
{
  "name": "hello, world!",
  "id": "dSs2wEtwD",
  "createdAt": "2020-06-07T05:17:54.944Z",
  "updatedAt": "2020-06-07T05:17:54.944Z"
}
```

## Todo 추가하기

### URL

(POST) /todos

### Response Example

추가한 todo가 반환된다.

```json
{
  "name": "this is the value for name",
  "id": "gvIZOyVaB",
  "createdAt": "2020-06-07T05:55:28.269Z",
  "updatedAt": "2020-06-07T05:55:28.269Z"
}
```

## Todo 업데이트하기

### URL

(PUT) /todos/:id

### Response Example

수정 된 todo가 반환된다.

```json
{
  "name": "this is a changed todo",
  "id": "sqQpKYohZ",
  "createdAt": "2020-06-07T05:56:24.657Z",
  "updatedAt": "2020-06-07T05:57:19.087Z"
}
```

## Todo 삭제하기

### URL

(DELETE) /todos/:id

### Response Example

삭제 된 todo가 반횐된다.

```json
{
  "name": "this is a changed todo",
  "id": "sqQpKYohZ",
  "createdAt": "2020-06-07T05:56:24.657Z",
  "updatedAt": "2020-06-07T05:57:19.087Z"
}
```
