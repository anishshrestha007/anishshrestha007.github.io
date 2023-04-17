import React from "react";
import profile from "../profile.jpeg";
export default function About() {
  return (
    <section id="portfolio-about" className="portfolio-about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div className="portfolio-about-body">
          <div>
            <p>
              Hello! My name is Anish Shrestha and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2015 when I started as an intern in Shangrila MicroSystem
            </p>
            <p>
              I had chance to work Municipal Taxation which was web based
              application responsible for Tax Collection which taught me alot
              about HTML,CSS, JavaScript and .Net platforms
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at ,{" "}
              <a
                href="https://www.braindigit.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                a huge IT company
              </a>
              , and{" "}
              <a
                href="https://www.tro.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                the shared experience agency
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at TRO for a variety of clients.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="skills-list">
            <li>.Net Core</li>
            <li>Javascript</li>
            <li>React</li>
            <li>SQL</li>
            <li>GIT</li>
            <li>Desktop Applications</li>
          </ul>
        </div>
        <div className="portfolio-about-img">
          <img
            alt=""
            role="presentation"
            aria-hidden="true"
            src={profile}
            style={{
              maxWidth: "100%",
              display: "block",
              position: "static",
              borderRadius: "30px",
            }}
          ></img>
        </div>
      </div>
    </section>
  );
}
