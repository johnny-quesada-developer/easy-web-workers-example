import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>;

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={`rounded-lg shadow-lg bg-white dark:bg-stone-100 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
