import React, {
  HtmlHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import merge, { MergeFilter } from "easy-css-merge";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Collapsible.scss";

export type CollapsibleApi = {
  open: () => void;
  close: () => void;
};

export type CollapsibleRef = [HTMLDetailsElement, CollapsibleApi];

export type CollapsibleProps = PropsWithChildren<
  HtmlHTMLAttributes<HTMLDetailsElement>
> & {
  /**
   * This parameter allows you to filter the default set of classes, so you can override
   */
  classNameFilter?: MergeFilter;
  title: string | JSX.Element;
  isOpen?: boolean;
  childrenContainerClassName?: string;
};

export const Collapsible = React.forwardRef<CollapsibleRef, CollapsibleProps>(
  ({ className, classNameFilter, children, title, isOpen, ...props }, ref) => {
    const containerRef = useRef<HTMLDetailsElement>(null);

    const [isCollapsibleOpen, setCollapsibleState] = useState(isOpen);

    const toggle = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event?.preventDefault();

      setCollapsibleState((prevState) => !prevState);
    };

    useEffect(() => {
      const { current } = containerRef;

      if (!current) return;

      if (isCollapsibleOpen) {
        containerRef.current.classList.add("open");

        return;
      }

      containerRef.current.classList.remove("open");
    }, [isCollapsibleOpen]);

    useEffect(() => {
      setCollapsibleState(isOpen);
    }, [isOpen]);

    useImperativeHandle(
      ref,
      () => {
        // add your public api here
        const api: CollapsibleApi = {
          open: () => {
            setCollapsibleState(true);
          },
          close: () => {
            setCollapsibleState(false);
          },
        };

        return [containerRef.current, api] as CollapsibleRef;
      },
      []
    );

    const isStringTitle = typeof title === "string";

    return (
      <details
        {...props}
        ref={containerRef}
        open={isCollapsibleOpen}
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

        <div className={merge("collapsible-details overflow-hidden")}>
          {children}
        </div>
      </details>
    );
  }
);
