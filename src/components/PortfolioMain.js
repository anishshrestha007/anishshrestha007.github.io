import React from "react";
import "../css/main.css";
export default function PortfolioMain() {
  return (
    <section id="portfolio-main" className="portfolio-main">
      <h1>Hi, my name is</h1>
      <h2 className="big-heading">Anish Shrestha.</h2>
      <h3 className="big-heading">I build things for the web.</h3>
      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <a href="https://www.tro.com/" target="_blank" rel="noreferrer">
          TRO
        </a>
        .
      </p>
      <a className="email-link" target="_blank" rel="noreferrer">
        Create Your Own Resume
      </a>
    </section>
  );
}
