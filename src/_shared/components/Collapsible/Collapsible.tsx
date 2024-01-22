import {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Collapsible.scss";
import merge from "easy-css-merge";

type CollapsibleProps = PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    title: string | JSX.Element;
    isOpen?: boolean;
  }
>;

export type CollapsibleRef = {
  open: () => void;
  close: () => void;
};

export const Collapsible = forwardRef<unknown, CollapsibleProps>(
  ({ children, title, className, isOpen, ...props }: CollapsibleProps, ref) => {
    const detailsRef = useRef<HTMLDetailsElement>(null);

    const [isCollapsibleOpen, setCollapsibleState] = useState(isOpen);

    const toggle = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event?.preventDefault();

      setCollapsibleState((prevState) => !prevState);

      const content = detailsRef.current.querySelector(
        ".collapsible-details"
      ) as HTMLElement;

      if (isCollapsibleOpen) {
        // to perform the animation the height must be set
        content.style.height = content.clientHeight + "px";
      }
    };

    useEffect(() => {
      const { current } = detailsRef;

      if (!current) return;

      if (isCollapsibleOpen) {
        detailsRef.current.classList.add("open");

        return;
      }

      detailsRef.current.classList.remove("open");
    }, [isCollapsibleOpen]);

    useEffect(() => {
      setCollapsibleState(isOpen);
    }, [isOpen]);

    useImperativeHandle<unknown, CollapsibleRef>(
      ref,
      () => ({
        open: () => {
          setCollapsibleState(true);
        },
        close: () => {
          setCollapsibleState(false);
        },
      }),
      []
    );

    const isStringTitle = typeof title === "string";

    return (
      <details
        {...props}
        ref={detailsRef}
        open={true}
        className={merge("collapsible marker:no-underline", className)}
      >
        <summary
          className="list-none flex justify-between items-center cursor-pointer"
          onClick={toggle}
        >
          <button
            className={merge(
              "flex justify-between items-center flex-1 text-left",
              {
                "pb-2 border-b border-gray-200": isCollapsibleOpen,
              }
            )}
          >
            <div className="">
              {isStringTitle ? (
                <h3 className="font-bold text-gray-600">{title}</h3>
              ) : (
                title
              )}
            </div>
            <IoIosArrowUp className="text-gray-600 collapsible-close-arrow" />
            <IoIosArrowDown className="text-gray-600 collapsible-open-arrow" />
          </button>
        </summary>

        <div
          className={merge(
            "collapsible-details overflow-hidden animation-fill-mode-forwards",
            {
              "animate-expand-from-top": isCollapsibleOpen,
              "animate-collapse-to-top": !isCollapsibleOpen,
            }
          )}
        >
          {children}
        </div>
      </details>
    );
  }
);
