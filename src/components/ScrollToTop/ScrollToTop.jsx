import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.scss";

const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="btn-scroll-to-top">
      {showTopBtn ? (
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          title="Na vrh"
          onClick={goToTop}
        />
      ) : null}
    </div>
  );
};

export default ScrollButton;
