import React from "react";
import { TodoModel } from "../model";
import "./styles.css";
import Todo from "./Todo";

interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
      <div className="todos remove"></div>
    </div>
  );
};

export default TodoList;
