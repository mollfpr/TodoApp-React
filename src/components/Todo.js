import React from "react";

const Todo = props => (
  <div className="col-md-12 d-flex justify-content-between align-items-center todo-container">
    <span
      className={props.todo.done ? `todo todo-complete` : `todo`}
      onClick={() => props.onCheck(props.todo)}
    >
      {props.todo.title}
    </span>
    <button className="btn btn-warning" onClick={() => props.onDelete(props.todo)}>-</button>
  </div>
);


export default Todo;