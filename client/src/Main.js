import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Search />
      <Sidebar />
    </div>
  );
}

export default Main;
