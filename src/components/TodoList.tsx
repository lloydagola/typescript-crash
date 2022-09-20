import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { TodoModel } from "../model";
import "./styles.css";
import Todo from "./Todo";

interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
  completedTodos: TodoModel[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {todos.map((todo, index) => (
              <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
