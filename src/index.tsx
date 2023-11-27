import "./index.scss";
import prismjs from "prismjs";
import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";

// import("prismjs/themes/prism.css").then(() => {
//   prismjs.theme = "prism";
// });

import("prismjs/themes/prism-tomorrow.css").then(() => {
  prismjs.theme = "prism-tomorrow";
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-full  bg-stone-200  animate-fade-in font-serif leading-6">
      <Header className="" />

      <Dashboard className="" />
    </div>
  </React.StrictMode>
);
