import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";

// ── AOS ─────────────────────────────────────────────────────
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App.jsx";

// Init AOS once before render
AOS.init({
  duration: 800,
  once: true, // animate only on first scroll — no repeat
  mirror: false,
  disable: false,
  offset: 60, // trigger slightly before element enters viewport
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
