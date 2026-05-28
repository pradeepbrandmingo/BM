import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const outer = document.querySelector(".cursor-outer");
    const inner = document.querySelector(".cursor-inner");

    if (!outer || !inner) return;

    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    // MOVE CURSOR
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      inner.style.left = mouseX + "px";
      inner.style.top = mouseY + "px";

      // make visible
      outer.style.visibility = "visible";
      inner.style.visibility = "visible";
    };

    document.addEventListener("mousemove", moveCursor);

    // SMOOTH OUTER CURSOR (LAG EFFECT)
    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      outer.style.left = posX + "px";
      outer.style.top = posY + "px";

      requestAnimationFrame(animate);
    };

    animate();

    // HOVER EFFECT (IMPORTANT 🔥)
    const hoverItems = document.querySelectorAll("a, button");

    hoverItems.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        outer.classList.add("cursor-hover");
        inner.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        outer.classList.remove("cursor-hover");
        inner.classList.remove("cursor-hover");
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
