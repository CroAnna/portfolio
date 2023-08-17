import "./InfoCard.scss";
import celijeDesktop from "../../assets/images/celije-desktop.png";

const InfoCard = () => {
  return (
    <div className="infocard-wrapper">
      <div className="infocard-text">
        <h3>About me</h3>
        <h4>Passionate developer based in Karlovac, Croatia 📍</h4>
        <p>
          I am a Junior Developer well-versed in <b>React</b>, <b>Angular</b>,
          <b>Node.js</b>, <b>Flutter</b>, and <b>C#</b>. My knack for creating
          user-friendly interfaces using React and Angular, coupled with Node.js
          backend skills, enables me to build seamless web interactions. With
          Flutter, I craft cross-platform mobile apps efficiently. I thrive in
          collaborative environments, valuing <b>teamwork</b> and effective
          communication. And love to <b>travel</b> and discover new cultures!
        </p>
      </div>
      <img src={celijeDesktop} alt="my skills images" />
    </div>
  );
};

export default InfoCard;
