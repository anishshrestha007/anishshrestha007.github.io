import React from "react";

export default function PortfolioExperience() {
  function changeTabs(e, activeTab) {
    var r = document.querySelector(":root");
    const target = e.target;
    const parent = target.parentNode;
    const grandparent = parent.parentNode;

    // Remove all current selected tabs
    parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach((t) => t.setAttribute("aria-selected", false));

    // Set this tab as selected
    target.setAttribute("aria-selected", true);

    // Hide all tab panels
    grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach((p) => p.setAttribute("hidden", true));

    // Show the selected panel
    grandparent.parentNode
      .querySelector(`#${target.getAttribute("aria-controls")}`)
      .removeAttribute("hidden");

    r.style.setProperty("--tab-active", activeTab);
  }

  return (
    <section id="portfolio-experience" className="portfolio-experience">
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className="inner">
        <div
          role="tablist"
          aria-label="Job tabs"
          className="experience-tablist"
        >
          <button
            id="tab-0"
            role="tab"
            tabIndex="0"
            aria-selected="true"
            aria-controls="panel-0"
            className="experience-button"
            onClick={(e) => changeTabs(e, 0)}
          >
            Upstatement
          </button>
          <button
            id="tab-1"
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-controls="panel-1"
            className="experience-button"
            onClick={(e) => changeTabs(e, 1)}
          >
            Scout
          </button>
          <button
            id="tab-2"
            role="tab"
            tabIndex="-1"
            aria-selected="false"
            aria-controls="panel-2"
            className="experience-button"
            onClick={(e) => changeTabs(e, 2)}
          >
            Apple
          </button>

          <div className="experience-highlight"></div>
        </div>
        <div className="experience-detail">
          <div
            id="panel-0"
            role="tabpanel"
            tabIndex="0"
            aria-labelledby="tab-0"
            className="experience-detail-div"
          >
            <h3>
              <span>Engineer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.upstatement.com/"
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Upstatement
                </a>
              </span>
            </h3>
            <p className="range">May 2018 - Present</p>
            <div>
              <ul>
                <li>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </li>
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                  Netlify
                </li>
                <li>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </li>
              </ul>
            </div>
          </div>
          <div
            id="panel-1"
            role="tabpanel"
            tabIndex="-1"
            aria-labelledby="tab-1"
            className="experience-detail-div"
            hidden
          >
            <h3>
              <span>Studio Developer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://web.northeastern.edu/scout/"
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Scout
                </a>
              </span>
            </h3>
            <p className="range">January - April 2018</p>
            <div>
              <ul>
                <li>
                  Worked with a team of three designers to build a marketing
                  website and e-commerce platform for{" "}
                  <a
                    href="https://blistabloc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    blistabloc
                  </a>
                  , an ambitious startup originating from Northeastern
                </li>
                <li>
                  Helped solidify a brand direction for blistabloc that spans
                  both packaging and web
                </li>
                <li>
                  Interfaced with clients on a weekly basis, providing
                  technological expertise
                </li>
              </ul>
            </div>
          </div>
          <div
            id="panel-2"
            role="tabpanel"
            tabIndex="-1"
            aria-labelledby="tab-2"
            className="experience-detail-div"
            hidden
          >
            <h3>
              <span>UI Engineer Co-op</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.apple.com/music/"
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Apple
                </a>
              </span>
            </h3>
            <p className="range">July - December 2017</p>
            <div>
              <ul>
                <li>
                  Developed and shipped highly interactive web applications for
                  Apple Music using Ember.js
                </li>
                <li>
                  Built and shipped the Apple Music Extension within Facebook
                  Messenger leveraging third-party and internal APIs
                </li>
                <li>
                  Architected and implemented the front-end of Apple Music's
                  embeddable web player widget, which lets users log in and
                  listen to full songs in the browser
                </li>
                <li>
                  Contributed extensively to MusicKit.js, a JavaScript framework
                  that allows developers to add an Apple Music player to their
                  web apps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
