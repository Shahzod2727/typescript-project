import React from "react";

import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    // <div className="App">
    //   {/* A component that adds todos */}
    //   <TodoList items={todos} />
    // </div>
    <h1>Hello World</h1>
  );
};

export default App;
