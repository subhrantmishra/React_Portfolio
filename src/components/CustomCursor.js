import { useEffect, useState } from "react";

function CustomCursor() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });

  useEffect(() => {
    // Touch device pe cursor nahi dikhana
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMove = (e) =>
      setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const onLeave = () =>
      setCursor((c) => ({ ...c, visible: false }));

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

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
