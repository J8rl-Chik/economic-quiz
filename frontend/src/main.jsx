import React from "react";
import { createRoot } from "react-dom/client";
import "./css/normalize.css"; // 전역 CSS 리셋 — 모든 컴포넌트에 적용됨
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
