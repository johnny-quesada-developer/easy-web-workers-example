import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>;

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 bg-zinc-50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
