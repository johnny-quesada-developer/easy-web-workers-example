import { PropsWithChildren, useCallback, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./collapsible.scss";

type CollapsibleProps = PropsWithChildren<{
  title: string | JSX.Element;
}>;

export const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  title,
}: CollapsibleProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const toggle = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault();

      const { current } = detailsRef;

      const details = current.querySelector<HTMLDivElement>(
        ".collapsible-details"
      );

      // fix the height of the details element so we can animate it
      if (!details.style.height) {
        details.style.height = `${details.offsetHeight}px`;
      }

      detailsRef.current.classList.toggle("open");
    },
    []
  );

  const isStringTitle = typeof title === "string";

  return (
    <details
      ref={detailsRef}
      open={true}
      onClick={toggle}
      className="collapsible open marker:no-underline"
    >
      <summary
        className="list-none flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <button
          className="flex justify-between flex-1 text-left border-b border-gray-200 pb-2"
          onClick={toggle}
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

      <div className="collapsible-details overflow-hidden animation-fill-mode-forwards">
        {children}
      </div>
    </details>
  );
};
