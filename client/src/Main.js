import React from "react";
// import Search from "./Search";
// import Sidebar from "./Sidebar";
import SearchIcon from "@material-ui/icons/Search";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="navigation-container">
        <div className="navigation">
          <nav>
            <div className="logo">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="nav-item home-link">
              <i className="fas fa-home"></i>
            </div>
            <div className="nav-item profile-container">
              <div className="profile"></div>
            </div>
          </nav>
        </div>
      </div>
      <div className="main">
        <div className="tweets-container">
          <div className="tweets-search-container">
            <div className="tweets-search-input">
              <input
                id="user-search-input"
                type="text"
                placeholder="Search Twitter"
              />
              <SearchIcon />
            </div>
          </div>
          <div className="tweets-list">
            <div className="tweets-welcome-message">
              <h5>Welcome to Twitter!</h5>
              <p>
                Use the search above to see what's happening around the world.
              </p>
            </div>
          </div>
          <div className="next-page-container">
            <div id="next-page">
              <i className="fas fa-arrow-down"></i>
            </div>
          </div>
        </div>
        <div className="tweets-sidebar-container">
          <div className="tweets-sidebar">
            <div className="tweets-trending">
              <h5>Trends for you</h5>
              <ul>
                <li>#Coding</li>
                <li>#Programminghumor</li>
                <li>#Python</li>
                <li>#Tesla</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
