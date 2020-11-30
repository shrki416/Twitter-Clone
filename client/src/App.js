import React from "react";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="container">
      <Nav />
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
