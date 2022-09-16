import React from "react";
import { TodoModel } from "../model";

interface Props {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const Todo: React.FC<Props> = ({ todo, todos }) => {
  return <div>{todo.todo}</div>;
};

export default Todo;
