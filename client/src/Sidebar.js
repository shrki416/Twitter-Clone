import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__tweets">
        <div className="sidebar__tweets-hashtags">
          <h5>Trends for you</h5>
          <ul>
            <li>#JavaScript</li>
            <li>#Programminghumor</li>
            <li>#Apple</li>
            <li>#Google</li>
            <li>#Tesla</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
