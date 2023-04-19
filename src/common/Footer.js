import React from "react";
import "../css/footer.css";
import { Github, Linkedin } from "feather-icons-react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <ul>
          <li>
            <a
              href="https://github.com/anishshrestha007"
              aria-label="GitHub"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github></Github>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/anish-shrestha-331712152"
              aria-label="Linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin></Linkedin>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-github">
        <a
          href="https://github.com/anishshrestha007"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Designed &amp; Built by Anish Shrestha</div>
        </a>
      </div>
    </footer>
  );
}
