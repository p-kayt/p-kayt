import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import "../styles/Portfolio.scss";

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
        <section id="home" className={`grid ${theme}`}>
          <div className={`card ${theme}`}>
            <h2>About Me</h2>
            <h1>Hi, I'm Trieu</h1>
            <p>
              I am a passionate software developer with experience in building
              web applications using modern technologies. I enjoy solving
              complex problems and continuously learning new skills.
            </p>
          </div>
          {/* Content for Home */}
        </section>
        <section id="skills" className={theme}>
          <h2>Skills</h2>
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
