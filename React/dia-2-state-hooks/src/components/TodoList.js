import React from "react";
import Todo from "./Todo";

export default function TodoList({ list, deleteTodo, toggleTodo }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Todo {...item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          </li>
        );
      })}
    </ul>
  );
}
