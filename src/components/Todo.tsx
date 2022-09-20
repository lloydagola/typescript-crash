import React from "react";
import { TodoModel } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: TodoModel;
  key: number;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const Todo: React.FC<Props> = ({ todo, todos, setTodos, key }) => {
  const handleDone = (id: number) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  const handleDelete = (id: number) =>
    setTodos(todos.filter((current) => current.id !== todo.id));

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon">
          <MdDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};
export default Todo;
