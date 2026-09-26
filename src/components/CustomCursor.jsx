import { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX -25}px`;
      cursor.style.top = `${event.clientY -25}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
}

export default CustomCursor;