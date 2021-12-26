import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.app.todos);
  // useSelector
  return (
    <div>
      {todos.map((item) => (
        <div key={item.id}>{item.title}- {item.status}</div>
      ))}
    </div>
  );
};

export { TodoList };
