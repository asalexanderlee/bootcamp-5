import React, { Component } from "react";
import "./TodoEntry.css";

class TodoEntry extends Component {
  render() {
    return (
      <div className="TodoEntry">
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.currentTodo}
          onKeyDown={e => (e.keyCode === 13 ? this.props.addTodo() : null)}
        />
        <button onClick={this.props.addTodo}>+</button>
      </div>
    );
  }
}

export default TodoEntry;
