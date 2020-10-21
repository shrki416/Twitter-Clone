import React from "react";
import "./Nav.css";
import { Avatar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import profileImg from "./assets/aa.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <nav>
          <div className="nav__logo">
            <TwitterIcon fontSize="large" />
          </div>
          <div className="nav__home">
            <HomeIcon fontSize="large" />
          </div>
          <div className="nav__profile">
            <Avatar alt="photo" src={profileImg} />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
