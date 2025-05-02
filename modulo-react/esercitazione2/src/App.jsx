import React from "react";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="p-4">
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
