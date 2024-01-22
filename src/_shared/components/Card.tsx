import merge from "easy-css-merge";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>;

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={merge("rounded-lg shadow-lg bg-white p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
};
