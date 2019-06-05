import React from "react";
import Todo from "./Todo";
import Folder from "./Folder";
import "./TodoList.css";

const TodoList = props => {
  return (
    <div className="TodoList">
      <div className="flex">
        <div className="sort">
          {props.todos.length > 1 && <button onClick={props.sortAlphabetically}>Sort A to Z</button>}
          {props.todos.length > 1 && <button onClick={props.sortByDate}>Sort by Due Date</button>}
        </div>
        {props.todos.length > -1 && <button onClick={props.addFolder}>Add Folder</button>}
      </div>
      {props.todos.map(
        (todo, i) =>
          todo.type === "todo" ? (
            <Todo
              todo={todo}
              key={i}
              deleteTodo={props.deleteTodo}
              completeTodo={props.completeTodo}
              changeDueDate={props.changeDueDate}
              dragTodo={props.dragTodo}
            />
          ) : (
            <Folder
              folder={todo}
              key={i}
              changeName={props.changeFolderName}
              allowDrop={props.allowDrop}
              onDrop={props.onDrop}
              expandFolder={props.expandFolder}
              deleteTodo={props.deleteTodo}
              completeTodo={props.completeTodo}
              changeDueDate={props.changeDueDate}
              dragTodo={props.dragTodo}
            />
          )
      )}
    </div>
  );
};

export default TodoList;
