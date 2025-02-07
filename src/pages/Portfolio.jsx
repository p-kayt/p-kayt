import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import "../styles/Portfolio.scss";
import "../styles/common.scss";
import {
  FileArrowDown,
  FileArrowDownSolid,
  GitHub,
  GitHubSolid,
  LinkedIn,
  LinkedInSolid,
} from "../assets/icons/icons.js";

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Java" },
  { name: "ReactJS" },
  { name: "Node.js" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "MongoDB" },
  { name: "SQL" },
];

const Portfolio = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".portfolio-header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`portfolio ${theme}`}>
      <header className="portfolio-header">
        <nav className="portfolio-nav">
          <a href="#home" onClick={(e) => handleNavigation(e, "home")}>
            Home
          </a>
          <a href="#skills" onClick={(e) => handleNavigation(e, "skills")}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavigation(e, "projects")}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
            Contact
          </a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle to {theme === "light" ? "dark" : "light"} theme
        </button>
      </header>

      <div className="portfolio-items">
        <section id="home" className={` ${theme}`}>
          <div className={`card ${theme}`}>
            <h1>Hi, I'm Trieu</h1>
            <h3>Web developer</h3>
            <h3>Ho Chi Minh City</h3>
            <p>
              I am a passionate software developer with experience in building
              web applications using modern technologies. I enjoy solving
              complex problems and continuously learning new skills.
            </p>
            <div className="btn-group">
              <button className="btn">
                <img
                  className="icon"
                  src={theme === "dark" ? FileArrowDown : FileArrowDownSolid}
                  alt="Download Resume"
                />
                Resume
              </button>
              <div className="social-btn">
                <img
                  className="social-icons"
                  src={theme === "dark" ? LinkedIn : LinkedInSolid}
                  alt="Linked In"
                />
              </div>
              <div className="social-btn">
                <img
                  className="social-icons"
                  src={theme === "dark" ? GitHub : GitHubSolid}
                  alt="Git Hub"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className={theme}>
          <div className="card">
            <h2>Skills</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Content for Skills */}
        </section>
        <section id="projects" className={theme}>
          <h2>Projects</h2>
          {/* Content for Projects */}
        </section>
        <section id="contact" className={theme}>
          <h2>Contact</h2>
          {/* Content for Contact */}
        </section>
      </div>
      <footer className="portfolio-footer">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
