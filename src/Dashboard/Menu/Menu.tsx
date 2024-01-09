import { useEffect, useMemo, useRef } from "react";
import {
  MenuState,
  getMenuState,
  useMenuState,
  Card,
  menuState,
} from "@shared";
import {
  ProgressBarExampleSummary,
  DiffLibExampleSummary,
  ImagesExampleSummary,
  ParallelExampleSummary,
} from "./summaries";

const onMenuStateChange = ({
  asideRef,
}: {
  asideRef: React.MutableRefObject<HTMLElement>;
}) => {
  // subscriptions are executed first than the component update
  const unsubscribe = getMenuState<true>((subscribe) => {
    subscribe(
      (menuState: MenuState) => {
        if (!menuState.isMenuOpen) {
          // to perform the animation the height must be set
          asideRef.current.style.height = asideRef.current.clientHeight + "px";

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
};

const onMenuVisibilityChange = ({
  asideRef,
}: {
  asideRef: React.MutableRefObject<HTMLElement>;
}) => {
  const observer = new IntersectionObserver(([menu]) => {
    menuState.setVisibility(menu.isIntersecting);
  });

  observer.observe(asideRef.current);

  return () => {
    observer.unobserve(asideRef.current);
  };
};

export const Menu: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  style,
  ...props
}) => {
  const [isMenuOpen] = useMenuState(({ isMenuOpen }) => isMenuOpen);

  const asideRef = useRef(null);

  useEffect(() => {
    const subscriptions = [
      onMenuStateChange({
        asideRef,
      }),
      onMenuVisibilityChange({
        asideRef,
      }),
    ];

    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  const options = useMemo(() => {
    return (
      <ul className={`flex flex-col gap-6`}>
        {[
          {
            key: "parallel",
            component: <ParallelExampleSummary />,
          },
          {
            key: "progress-bar",
            component: <ProgressBarExampleSummary />,
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
      w-full h-fit lg:w-96 mf:w-96      
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
