import React from "react";
import portfolioIcon from "../portfolioIcon.PNG";
import MenuIcon from "@mui/icons-material/Menu";
import "../css/navbar.css";

export default function CommonNav() {
  function onAnchorTagClick() {
    const menuButton = document.getElementById("click");
    menuButton.checked = false;
  }
  return (
    <nav>
      <div className="logo">
        <a href="#">
          <img src={portfolioIcon} className="portfolio-logo" alt="logo" />
        </a>
      </div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <MenuIcon color="action" className="custom-menu-icon" />
      </label>
      <ul>
        <li>
          <a href="#portfolio-about" onClick={() => onAnchorTagClick()}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio-experience">Experience</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#portfolio-contact">Contact</a>
        </li>
        <li>
          <a
            class="resume-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
