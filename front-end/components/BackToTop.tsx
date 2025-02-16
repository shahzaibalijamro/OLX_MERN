import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const [stickToTop, setStickToTop] = useState(false);

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
