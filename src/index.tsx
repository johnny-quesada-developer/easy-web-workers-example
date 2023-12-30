import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { ThemeButton } from "./Dashboard/ThemeButton";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className=" bg-stone-200 dark:bg-black font-serif leading-6 pt-14">
      <ThemeButton className="fixed top-16 right-6 z-20" />

      <Header className="fixed top-0 w-full z-10" />

      <Dashboard className="" />
    </div>
  </React.StrictMode>
);
