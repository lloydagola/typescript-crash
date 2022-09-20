import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation";
import React, { useState } from "react";
import { TodoModel } from "./model";
import TodoList from "./components/TodoList";

import { DragDropContext } from "react-beautiful-dnd";

import "./App.css";

import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const [completedTodos, setCompletedTodos] = useState<TodoModel[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo = { id: Date.now(), todo, isDone: false };

    if (todos) {
      setTodos([...todos, newTodo]);
      setTodo("");
    }

    console.log(todos);
  };

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
