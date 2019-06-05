import React from "react";
import "./ControlPanel.css";

const ControlPanel = props => {
  return (
    <div className="ControlPanel">
      <div className="flex">
        <div>
          <button className="undo-btn" title="Undo" onClick={props.undo}>
            ↩︎
          </button>
          <button className="redo-btn" title="Redo" onClick={props.redo}>
            ↩︎
          </button>
        </div>
        <div>
          <button className="clear-btn" title="Clear" onClick={props.clear}>
            ⌫
          </button>
          <button className="export-btn" title="Download" onClick={props.export}>
            ⇪
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
