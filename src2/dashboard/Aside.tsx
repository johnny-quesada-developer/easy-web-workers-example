import { useAsideState } from "./_shared";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";

export const Aside = () => {
  const [{ isMenuOpen }, actions] = useAsideState();

  useEffect(() => {
    const handler = () => {
      const minWidth = 768;

      if (window.innerWidth >= minWidth) {
        actions.open();

        return;
      }

      actions.close();
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <aside
      className={`disable-animations absolute w-full md:relative lg:relative lg:w-72 md:w-72 border-r border-r-gray-200 border-opacity-80 bg-white p-6 h-full overflow-hidden ${
        isMenuOpen
          ? "animate-expand-from-left"
          : "animate-collapse-to-left animation-fill-mode-forwards"
      }`}
    >
      <div className="lg:w-60 md:w-60 ">
        <div className="flex justify-between items-center ">
          <strong>Easy Web Worker</strong>

          <button
            className="md:hidden lg:hidden"
            title="collapse"
            onClick={actions.close}
          >
            <IoIosArrowBack fontSize={26} color="#60a5fa" />
          </button>
        </div>

        <p className="text-gray-700 text-justify mt-3">
          is a lightweight and easy-to-use library for creating web workers in
          JavaScript applications. With Easy Web Worker, you can move
          computationally expensive tasks and logic off the main thread and into
          a separate thread, improving the performance and responsiveness of
          your application. The library has several benefits, including improved
          performance, an easy-to-use API, and TypeScript support.
        </p>
      </div>
    </aside>
  );
};
