import React from "react";
import "./topMenu.scss";
import logo from "../../img/logo.png";
import search from "../../img/search.svg";
import notification from "../../img/notifications.svg";
import profile from "../../img/profile.svg";

function TopMenu() {
  return (
    <div className="navigation">
      <ul className="navigation_container">
        <a type="active" href="/#">
          <img
            className="navigation_logo_container"
            src={logo}
            alt="netflix"
          ></img>
        </a>
        <a type="active" className="navigation_link" href="/#">
          Home
        </a>
        <a type="active" className="navigation_link" href="/#">
          TV Shows
        </a>
        <a type="active" className="navigation_link" href="/#">
          Movies
        </a>
        <a type="active" className="navigation_link" href="/#">
          Recently Added
        </a>
        <a type="active" className="navigation_link" href="/#">
          My List
        </a>
        <div className="navigation_search">
          <img src={search} alt="search" />
        </div>
        <a type="active" className="navigation_link" href="/#">
          Kids
        </a>
        <a type="active" className="navigation_link" href="/#">
          DVD
        </a>
        <div className="navigation_link">
          <img src={notification} alt="search" />
        </div>
        <div className="navigation_link">
          <img src={profile} alt="search" />
        </div>
      </ul>
    </div>
  );
}

export default TopMenu;
