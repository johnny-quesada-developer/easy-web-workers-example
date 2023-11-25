import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-full bg-gray-100 animate-fade-in">
      <Header className="" />

      <Dashboard className="" />
    </div>
  </React.StrictMode>
);
