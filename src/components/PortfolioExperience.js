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
            TRO
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
            Braindigit
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
            Shangrila Micro-System
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
              <span>Sr. Software Engineer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.tro.com/"
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TRO
                </a>
              </span>
            </h3>
            <p className="range">Sept 2021 - Present</p>
            <div>
              <ul>
                <li>
                  Worked with a team of 4 developers and 1 designers to build
                  Financial(Invoicing) application, Promostaff Management
                  System, Inventory Management System website , all the
                  applications are internal
                </li>
                <li>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </li>
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as React, .Net
                  Core, Microsoft SQL, React, JavaScript, Desktop Applications
                </li>
                <li>
                  Maintaining professionalism in areas such as: organizing
                  meetings to make communication easy and transparent regarding
                  project issues schedules, communication, delivery of the
                  product and decisions on implementation.
                </li>
                <li>Experience in code review and demos.</li>
                <li>
                  Investigation, design, and implement scalable applications for
                  data identification, analysis, retrieval, and indexing.
                </li>
                <li>
                  Identify, prioritize and execute tasks in the software
                  development life cycle
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
              <span>Senior Software Engineer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://www.braindigit.com/"
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Braindigit
                </a>
              </span>
            </h3>
            <p className="range">January 2018 - Aug 2021</p>
            <div>
              <ul>
                <li>
                  Worked with a team of 8 developers and 2 designers to build a
                  Learning Management System website{" "}
                  <a
                    href="https://neemaacademy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    neemaacademy
                  </a>
                  , involved from scratch
                </li>
                <li>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as React, .Net
                  Core, Microsoft SQL, React, JavaScript
                </li>
                <li>
                  Coordinating with other developers with their work, issues,
                  and attendance and providing status update every week and
                  maintaining the smooth work environment among the team member.
                </li>
                <li>
                  Involve in decision making about the project’s modules like
                  breaking the modules in stories
                </li>
                <li>
                  Interface with business analysts, developers, and technical
                  support to determine optimal specifications.
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
              <span>Software Engineer</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a
                  href="https://shangrila.com.np/"
                  className="inline-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Shangrila Micro-System
                </a>
              </span>
            </h3>
            <p className="range">June 2015 - January 2018</p>
            <div>
              <ul>
                <li>
                  Consulted regularly with customers on project status,
                  proposals and technical issues.
                </li>
                <li>
                  Transformed existing software to correct errors, upgrade
                  interfaces, and improve efficiency.
                </li>
                <li>
                  Cooperate diligently with other IT team members to plan,
                  design, and develop smart solutions.
                </li>
                <li>
                  Write modular, secure and well-tested front-end code in
                  JavaScript framework.
                </li>
                <li>
                  Perform tasks efficiently and work together with the team to
                  ensure project success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
