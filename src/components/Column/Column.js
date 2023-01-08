import React from "react";
import "./Column.scss";
import Task from "components/Task/Task";

const Column = () => {
  return (
    <div className="column">
      <header>Phenikaa U</header>
      <ul className="task-list">
        <Task></Task>
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
