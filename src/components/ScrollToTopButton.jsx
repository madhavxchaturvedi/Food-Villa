import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-[#e86716] text-white shadow-lg hover:bg-black hover:text-[#e86716] transition"
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-2xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
