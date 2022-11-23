import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import Todo from "./routes/Todo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Todo />}/>
    </Routes>
  );
}

export default App;
