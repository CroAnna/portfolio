import "./Hero.scss";
import vector_bottom_left from "../../assets/images/vector_1.png";
import vector_top_right from "../../assets/images/vector_2.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <nav>
        <li>Home</li> <li>About</li> <li>Projects</li> <li>Contact</li>
      </nav>
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
