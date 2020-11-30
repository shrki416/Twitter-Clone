import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { VscListSelection } from "react-icons/vsc";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";

function Nav() {
  return (
    <div className="nav">
      <h2>
        <RiHome7Fill /> Home
      </h2>
      <h2>
        <BiHash /> Explore
      </h2>
      <h2>
        <MdNotifications /> Notifications
      </h2>
      <h2>
        <BiEnvelope /> Messages
      </h2>
      <h2>
        <BsBookmark /> Bookmarks
      </h2>
      <h2>
        <VscListSelection /> Lists
      </h2>
      <h2>
        <HiOutlineUser /> Porfile
      </h2>
      <h2>
        <CgMoreO /> More
      </h2>
      <button className="nav-btn">Tweet</button>
    </div>
  );
}

export default Nav;
