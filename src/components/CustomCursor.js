import { useEffect, useState } from "react";

function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });

  useEffect(() => {
    const onMove = (e) =>
      setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const onLeave = () =>
      setCursor((c) => ({ ...c, visible: false }));

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Hide default cursor on entire page
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${cursor.visible ? "visible" : ""}`}
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />
      <div
        className={`cursor-ring ${cursor.visible ? "visible" : ""}`}
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />
    </>
  );
}

export default CustomCursor;