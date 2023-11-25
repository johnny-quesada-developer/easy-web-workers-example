import { useEffect, useRef } from "react";
import { MenuState, getMenuState, useMenuState } from "../../_shared";
import { Card } from "../../_shared/components";
import { DiffLibExampleSummary, ImagesExampleSummary } from "../examples";
import { Intro } from "./Intro";

export const Menu: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  style,
  ...props
}) => {
  const [{ isMenuOpen }] = useMenuState();
  const asideRef = useRef(null);

  useEffect(() => {
    // subscriptions are executed first than the component update
    const unsubscribe = getMenuState<true>((subscribe) => {
      subscribe(
        (menuState: MenuState) => {
          if (!menuState.isMenuOpen) {
            // to perform the animation the height must be set
            asideRef.current.style.height =
              asideRef.current.clientHeight + "px";

            return;
          }

          // after the animation the height must be removed
          setTimeout(() => {
            asideRef.current.style.height = null;
          }, 300);
        },
        {
          skipFirst: true,
        }
      );
    });

    return unsubscribe;
  }, []);

  return (
    <aside
      ref={asideRef}
      {...props}
      style={{
        ...style,
      }}
      className={`
      ${className} 
      animation-fill-mode-forwards 
      h-full w-full lg:w-96 mf:w-96      
      flex flex-col gap-6 
      ${
        isMenuOpen
          ? "animate-expand-from-top mb-6 lg:mr-6 md:mr-6 md:animate-expand-from-left lg:animate-expand-from-left"
          : "animate-collapse-to-top md:animate-collapse-to-left lg:animate-collapse-to-left"
      }`}
    >
      <ul className={`flex flex-col gap-6 w-full`}>
        <li>
          <Intro />
        </li>

        <li>
          <DiffLibExampleSummary />
        </li>
        <li>
          <ImagesExampleSummary />
        </li>
      </ul>
    </aside>
  );
};
