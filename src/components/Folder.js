import React from "react";
import Todo from "./Todo";
import "./Folder.css";

const Folder = props => {
  return (
    <div className="Folder">
      <div className="folder-wrapper">
        <div
          className="down-arrow"
          style={{ transform: props.folder.isExpanded ? "none" : "scaleY(-1)" }}
          onClick={() => props.expandFolder(props.folder.id)}
        >
          ⌃
        </div>
        <input
          type="text"
          value={props.folder.name}
          onChange={e => props.changeName(e, props.folder.id)}
          onDragOver={props.allowDrop}
          onDrop={e => props.onDrop(e, props.folder.id)}
        />
        <div className="delete" onClick={() => props.deleteTodo(props.folder.id)}>
          ✖︎
        </div>
      </div>
      {props.folder.isExpanded &&
        props.folder.todos.map((todo, i) => (
          <Todo
            todo={todo}
            key={i}
            deleteTodo={props.deleteTodo}
            completeTodo={props.completeTodo}
            changeDueDate={props.changeDueDate}
            dragTodo={props.dragTodo}
          />
        ))}
    </div>
  );
};

export default Folder;
