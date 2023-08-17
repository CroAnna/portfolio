import "./Hero.scss";
import vector_bottom_left from "../../assets/images/vector_1.png";
import vector_top_right from "../../assets/images/vector_2.png";
import github from "../../assets/images/github.png";
import github_dark from "../../assets/images/github_dark.png";
import linkedin from "../../assets/images/linkedin.png";
import linkedin_dark from "../../assets/images/linkedin_dark.png";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="hero-wrapper" id="home">
      {isDesktop ? (
        <nav className="desktop">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
      ) : (
        <div className="mobile">
          <div className="content">
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}

      <div className="hero-vectors">
        <img className="vector-top" src={vector_top_right} alt="" />

        <img className="vector-left" src={vector_bottom_left} alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <p>Hi, my name is</p>
          <div className="inner">
            <h1>Ana Škarica</h1>
            <h2>I build apps.</h2>
          </div>
          <p>I’m Full-Stack Web and Mobile developer from Croatia. </p>
        </div>
        <div className="hero-image"></div>
      </div>
      <div className="hero-social-media">
        <a href="https://github.com/CroAnna" target="_blank" rel="noreferrer">
          <img src={isDesktop ? github : github_dark} alt="github-logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/ana-%C5%A1karica-89805120b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={isDesktop ? linkedin : linkedin_dark} alt="linkedin-logo" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
