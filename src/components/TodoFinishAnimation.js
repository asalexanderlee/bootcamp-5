import React, { Component } from "react";
import "./TodoFinishAnimation.css";

class TodoFinishAnimation extends Component {
  render() {
    return (
      <div className="TodoFinishAnimation" style={{ width: this.props.isDone ? "100%" : "0%" }}>
        <div className="rainbow" />
      </div>
    );
  }
}

export default TodoFinishAnimation;
