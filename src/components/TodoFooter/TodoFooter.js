import React from "react";
import { Link } from "react-router-dom";

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default TodoFooter;
