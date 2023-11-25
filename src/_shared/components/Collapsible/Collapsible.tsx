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
        className={`${className} collapsible marker:no-underline`}
      >
        <summary
          className="list-none flex justify-between items-center cursor-pointer"
          onClick={toggle}
        >
          <button
            className={`flex justify-between items-center flex-1 text-left ${
              isCollapsibleOpen ? "pb-2 border-b border-gray-200" : ""
            }`}
          >
            <div className="">
              {isStringTitle ? (
                <h3 className="font-bold text-blue-400">{title}</h3>
              ) : (
                title
              )}
            </div>

            <IoIosArrowUp className="text-blue-400 collapsible-close-arrow" />

            <IoIosArrowDown className="text-blue-400 collapsible-open-arrow" />
          </button>
        </summary>

        <div
          className={`
          collapsible-details overflow-hidden animation-fill-mode-forwards
          ${
            isCollapsibleOpen
              ? "animate-expand-from-top"
              : "animate-collapse-to-top"
          }`}
        >
          {children}
        </div>
      </details>
    );
  }
);
