import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const [stickToTop, setStickToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const middleOfPage = document.documentElement.scrollHeight / 2;

      console.log("ScrollY:", scrollY); // Debugging log
      console.log("Middle of Page:", middleOfPage); // Debugging log

      if (scrollY > middleOfPage) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      if (scrollY > middleOfPage + 200) {
        setStickToTop(true);
      } else {
        setStickToTop(false);
      }
    };

    window.addEventListener("scroll", () => console.log("Scrolling..."));
    console.log("Scroll event listener added!"); // Debugging log

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Scroll event listener removed!"); // Debugging log
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 ${
        showButton ? "block" : "hidden"
      } ${stickToTop ? "top-5" : "bottom-5"}`}
    >
      ↑
    </button>
  );
}
