import "./InfoCard.scss";
import celijeDesktop from "../../assets/images/celije-desktop.png";
import celijeMobile from "../../assets/images/celije-mobile.png";
import airplane from "../../assets/images/airplane.png";

import { useEffect, useState } from "react";

const InfoCard = () => {
  const [isTablet, setTablet] = useState(window.innerWidth >= 580);
  const updateMedia = () => {
    setTablet(window.innerWidth >= 580);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="infocard-wrapper" id="about">
      <div className="infocard-inner">
        <div className="infocard-text">
          <h3>About me</h3>
          <h4>Passionate developer based in Karlovac, Croatia 📍</h4>
          <p>
            I am a Junior Developer well-versed in <b>React</b>, <b>Vue</b>,
            {"  "}
            <b>Laravel</b>, <b>Node.js</b>, <b>Flutter</b>, and <b>C#</b>. My
            knack for creating user-friendly interfaces using React and Angular,
            coupled with Node.js backend skills, enables me to build seamless
            web interactions. With Flutter, I craft cross-platform mobile apps
            efficiently.
          </p>
          <p>
            I thrive in collaborative environments, valuing <b>teamwork</b> and
            effective communication.
          </p>
          <p>
            And love to <b>travel</b> and discover new cultures!
          </p>
          <div className="img-container">
            <img src={airplane} alt="airplane" />
          </div>
        </div>
        <img
          src={isTablet ? celijeDesktop : celijeMobile}
          alt="my skills images"
        />
      </div>
    </div>
  );
};

export default InfoCard;
