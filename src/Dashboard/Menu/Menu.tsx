import { useEffect, useMemo, useRef } from "react";
import { MenuState, getMenuState, useMenuState } from "../../_shared";
import { IntroExampleSummary } from "./IntroExampleSummary";
import { Card } from "../../_shared/components";
import { DiffLibExampleSummary } from "./DiffLibExampleSummary";
import { ImagesExampleSummary } from "./ImagesExampleSummary";

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

  const options = useMemo(() => {
    return (
      <ul className={`flex flex-col gap-6 w-full`}>
        {[
          {
            key: "intro",
            component: <IntroExampleSummary />,
          },
          {
            key: "diff-lib",
            component: <DiffLibExampleSummary />,
          },
          {
            key: "images",
            component: <ImagesExampleSummary />,
          },
        ].map(({ key, component }) => (
          <Card key={key}>
            <li>{component}</li>
          </Card>
        ))}
      </ul>
    );
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
      {options}
    </aside>
  );
};
