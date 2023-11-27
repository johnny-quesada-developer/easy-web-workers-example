import prismjs from "prismjs";
import React, { useEffect } from "react";
import { Card } from "../_shared/components";
import { CurrentExample } from "./CurrentExample";
import { menuStateActions } from "../_shared";
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
        menuStateActions.open();

        return;
      }

      menuStateActions.close();
    };

    window.addEventListener("resize", handler);

    prismjs.highlightAll();

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
      <Menu />

      <div
        className={`         
        h-fit-content flex flex-col justify-between gap-6 
      `}
      >
        <Card className="">
          <CurrentExample />
        </Card>
      </div>
    </main>
  );
};
