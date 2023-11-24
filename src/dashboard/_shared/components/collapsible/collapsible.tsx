import {
  PropsWithChildren,
  useCallback,
  useEffect,
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

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  title,
  className,
  isOpen,
  ...props
}: CollapsibleProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const [isCollapsibleOpen, setCollapsibleState] = useState(isOpen);

  const toggle = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event?.preventDefault();

      setCollapsibleState((prevState) => !prevState);
    },
    []
  );

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

  const isStringTitle = typeof title === "string";

  return (
    <details
      ref={detailsRef}
      open={true}
      className="collapsible marker:no-underline"
    >
      <summary
        className="list-none flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <button className="flex justify-between flex-1 text-left border-b border-gray-200 pb-2">
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
        className={`collapsible-details overflow-hidden animation-fill-mode-forwards ${className}`}
        {...props}
      >
        {children}
      </div>
    </details>
  );
};
