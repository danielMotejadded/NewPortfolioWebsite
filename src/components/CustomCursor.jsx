import { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
}

export default CustomCursor;