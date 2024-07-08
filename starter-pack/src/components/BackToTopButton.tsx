import { FaArrowUp } from "react-icons/fa6";

const BackToTopButton = () => {
  return (
    <a
      href="#top"
      className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 focus:outline-none transition-opacity duration-300 opacity-0"
      id="back-to-top"
    >
      <FaArrowUp className="h-6 w-6" />
    </a>
  );
};

export default BackToTopButton;
