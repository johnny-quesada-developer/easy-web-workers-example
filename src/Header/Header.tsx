import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

import { useMenuState } from "@shared";

export const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const [isMenuOpen, actions] = useMenuState(({ isMenuOpen }) => isMenuOpen);

  return (
    <header
      {...props}
      className={`${className} h-14 bg-gray-700 flex items-center justify-start px-6 gap-3`}
    >
      <button
        title="Close menu"
        className={`${
          isMenuOpen ? "animate-fade-in" : "hidden"
        } cursor-pointer`}
        onClick={actions.close}
      >
        <IoIosArrowBack color="white" />
      </button>

      <button
        title="Open menu"
        className={`${
          !isMenuOpen ? "animate-fade-in" : "hidden"
        } cursor-pointer`}
        onClick={actions.open}
      >
        <GiHamburgerMenu color="white" />
      </button>

      <h1 className="text-white font-bold">
        Welcome to the{" "}
        <strong className=" font-extrabold">EasyWebWorker</strong>!
      </h1>
    </header>
  );
};
