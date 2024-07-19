'use client'
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
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
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      style={{ transition: "opacity 0.3s ease-out, transform 0.3s ease-out" }}
    >
      <button
        title="Scroll to top"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="rounded-full bg-primary-100 p-3 text-white shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-500 active:bg-primary-300"
      >
        <FaArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTopButton;
