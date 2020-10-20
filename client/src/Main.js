import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="main">I'm the main component</div>
      <Search />
      <Sidebar />
    </div>
  );
}

export default Main;
