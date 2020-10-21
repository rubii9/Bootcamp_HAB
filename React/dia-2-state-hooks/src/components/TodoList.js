import React from "react";
import Todo from "./Todo";

export default function TodoList({ list, deleteTodo }) {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Todo {...item} deleteTodo={deleteTodo} />
          </li>
        );
      })}
    </ul>
  );
}
