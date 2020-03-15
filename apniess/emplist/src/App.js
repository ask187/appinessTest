import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import TableEmp from "./components/TableEmp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/PageTwo" exact component={TableEmp} />
      </BrowserRouter>
    </div>
  );
}

export default App;
