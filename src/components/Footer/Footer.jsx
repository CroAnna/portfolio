import "./Footer.scss";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-inner">
        <div className="footer-text">
          <p>© 2023. All rights reserved.</p>
          <p>Ana Škarica</p>
          <a href="#">Back to top</a>
        </div>
        <div className="footer-social-media">
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
      </div>
    </div>
  );
};

export default Footer;
