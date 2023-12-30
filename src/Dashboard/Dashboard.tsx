import React, { useEffect } from "react";
import { CurrentExample } from "./CurrentExample";
import { Card, menu, theme } from "@shared";
import { Menu } from "./Menu/Menu";

export const Dashboard: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    const handler = () => {
      const minWidth = 768;

      if (window.innerWidth >= minWidth) {
        menu.open();

        return;
      }

      menu.close();
    };

    window.addEventListener("resize", handler);

    theme.highlight();

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <main
      {...props}
      className={`
      ${className} 
      
      dashboard p-6 grid`}
      style={{
        ...style,
      }}
    >
      <Menu className="" />

      <div
        className={`         
        overflow-auto flex flex-col justify-between gap-6 
      `}
      >
        <Card className="">
          <CurrentExample />
        </Card>
      </div>
    </main>
  );
};
