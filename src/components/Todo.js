import React from "react";
import "./Todo.css";
import TodoFinishAnimation from "./TodoFinishAnimation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Todo = props => {
  return (
    <div className="Todo" draggable="true" onDragStart={e => props.dragTodo(e, props.todo.id)}>
      <div className="todo-wrapper" style={{ backgroundColor: props.todo.isDone ? "#01BAC420" : "#efefef" }}>
        <input
          type="checkbox"
          checked={props.todo.isDone}
          onChange={() => props.completeTodo(props.todo.id, !props.todo.isDone)}
        />
        <p>{props.todo.name}</p>
        <DatePicker
          selected={props.todo.dueDate}
          onChange={date => props.changeDueDate(date, props.todo.id)}
          dateFormat="MMMM d"
          placeholderText="Set Date"
          className="DatePicker"
        />
        <button onClick={() => props.deleteTodo(props.todo.id)}>✖︎</button>
      </div>
      <TodoFinishAnimation isDone={props.todo.isDone} />
    </div>
  );
};

export default Todo;
