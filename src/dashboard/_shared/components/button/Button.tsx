import { tryCatchPromise } from "cancelable-promise-jq";
import { PropsWithChildren, useCallback, useRef } from "react";

type ButtonProps = Omit<
  PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>,
  "onClick"
> & {
  onClick: <R = void>() => R | Promise<R>;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  const state = useRef({
    isRunning: false,
  });

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      const { current } = state;

      // prevent multiple clicks
      if (current.isRunning) {
        return;
      }

      current.isRunning = true;

      const { error } = await tryCatchPromise(() => onClick());

      current.isRunning = false;

      if (!error) return;

      throw error;
    },
    [onClick]
  );

  return (
    <button onClick={handleClick} {...props} className="flex gap-3">
      <div>{children}</div>
    </button>
  );
};
