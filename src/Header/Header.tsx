import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

import { useMenuState } from "../_shared";

export const Header: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const [{ isMenuOpen }, actions] = useMenuState();

  return (
    <header
      {...props}
      className={`${className} h-14 bg-blue-400 flex items-center justify-start px-6 gap-3`}
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

      <h1 className="text-white ">
        Welcome to the <strong>EasyWebWorker</strong>!
      </h1>
    </header>
  );
};
