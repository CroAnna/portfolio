import "./Hero.scss";
import vector_bottom_left from "../../assets/images/vector_1.png";
import vector_top_right from "../../assets/images/vector_2.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <nav>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </nav>
      <div className="hero-social-media">
        <a href="https://github.com/CroAnna" target="_blank" rel="noreferrer">
          <img src={github} alt="github-logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/ana-%C5%A1karica-89805120b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin-logo" />
        </a>
      </div>
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
    </div>
  );
};

export default Hero;
