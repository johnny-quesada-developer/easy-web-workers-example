import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";

import { useAsideState } from "./_shared";

export const Header = () => {
  const [{ isMenuOpen }, actions] = useAsideState();

  return (
    <header className="col-span-2 h-14 bg-blue-400 flex items-center justify-start px-6 gap-3">
      <button
        className={`${
          isMenuOpen ? "animate-fade-in" : "hidden"
        } cursor-pointer`}
        onClick={actions.close}
      >
        <IoIosArrowBack color="white" />
      </button>

      <button
        className={`${
          !isMenuOpen ? "animate-fade-in" : "hidden"
        } cursor-pointer`}
        onClick={actions.open}
      >
        <GiHamburgerMenu color="white" />
      </button>

      <h1 className=" font-bold text-white ">
        Let's create some easy web workers!
      </h1>
    </header>
  );
};
