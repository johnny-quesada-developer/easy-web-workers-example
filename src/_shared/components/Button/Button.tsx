import { isPromise, tryCatch, tryCatchPromise } from "cancelable-promise-jq";
import merge from "easy-css-merge";
import { PropsWithChildren, useCallback, useRef } from "react";
import { ImSpinner } from "react-icons/im";

type ButtonProps = Omit<
  PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>,
  "onClick"
> & {
  onClick?: () => void | Promise<void>;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
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

      const spinner =
        event.currentTarget.querySelector<HTMLElement>(".loading-indicator");

      current.isRunning = true;
      spinner.classList.remove("hidden");

      try {
        const promise = onClick?.();
        const isPromise = Promise.resolve(promise) === promise;

        if (!isPromise) return;

        await promise;
      } catch (error) {
        throw error;
      } finally {
        current.isRunning = false;
        spinner.classList.add("hidden");
      }
    },
    [onClick]
  );

  return (
    <button
      onClick={handleClick}
      {...props}
      className={merge("flex gap-3 justify-center items-center", className)}
    >
      <div>{children}</div>

      <ImSpinner className="loading-indicator animate-spin hidden" />
    </button>
  );
};
