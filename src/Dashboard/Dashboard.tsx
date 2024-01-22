import React, { useEffect } from "react";
import { CurrentExample } from "./CurrentExample";
import { Card, menu, theme, MIN_WITH_FOR_TWO_COLUMNS } from "@shared";
import { ThemeButton } from "./ThemeButton";
import { Header } from "@src/Header";
import { Menu } from "./Menu";

export const Dashboard: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= MIN_WITH_FOR_TWO_COLUMNS) {
        menu.open();

        return;
      }

      menu.close();
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <>
      <Header className="fixed top-0 w-full z-10" />

      <ThemeButton className="fixed top-16 right-6 z-20" />

      <div className="mt-14  font-serif leading-6 flex flex-col md:flex-row lg:flex-row p-6 max-w-full flex-wrap">
        <Menu className="" />

        <main className="flex-1 max-w-full overflow-hidden">
          <Card className="">
            <CurrentExample />
          </Card>
        </main>
      </div>
    </>
  );
};
