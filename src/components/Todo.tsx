import React, { useState, useEffect } from "react";
import { TodoModel } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: TodoModel;
  index: number;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const Todo: React.FC<Props> = ({ todo, todos, setTodos, index }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleDoneClick = (id: number) =>
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  const handleDone = () =>
    todo.isDone ? (
      <s className="todos__single--text">{todo.todo}</s>
    ) : (
      <span className="todos__single--text">{todo.todo}</span>
    );
  const handleEditClick = (id: number) =>
    setTodos((previousTodos) =>
      previousTodos.map((current) => {
        if (current.id === id) {
          setEditing(!editing);
        }
        return current;
      })
    );
  const handleDeleteClick = (id: number) =>
    setTodos((previousTodos) =>
      previousTodos.filter((current) => current.id !== todo.id)
    );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((previousTodos) =>
      previousTodos.map((current) =>
        current.id === todo.id ? { ...current, todo: value } : current
      )
    );
    setEditing(false);
  };

  useEffect(() => {
    setValue(todo.todo);
  }, [todo, todos]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={handleFormSubmit}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {!editing && handleDone()}
          {editing && (
            <input
              value={value}
              onChange={(e) =>
                setValue((currentValue) =>
                  currentValue !== e.target.value
                    ? e.target.value
                    : currentValue
                )
              }
            />
          )}
          {!editing && (
            <div>
              <span className="icon">
                <AiFillEdit onClick={() => handleEditClick(todo.id)} />
              </span>
              <span className="icon">
                <AiFillDelete onClick={() => handleDeleteClick(todo.id)} />
              </span>
              <span className="icon">
                <MdDone onClick={() => handleDoneClick(todo.id)} />
              </span>
            </div>
          )}
        </form>
      )}
    </Draggable>
  );
};
export default Todo;
