import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{}>;

export const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  return <div className="rounded-lg shadow-lg p-6">{children}</div>;
};
