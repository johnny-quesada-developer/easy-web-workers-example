import { useAsideState } from "./_shared";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

export const Aside = () => {
  const [{ isMenuOpen }] = useAsideState();

  return (
    <aside
      className={`absolute w-full md:relative lg:relative lg:w-72 md:w-72 border-r border-r-gray-200 bg-white p-6 h-full overflow-hidden ${
        isMenuOpen ? "animate-collapse-to-left" : "animate-expand-from-left"
      }`}
    >
      <h2 className="text-lg font-bold text-gray-700 flex justify-between items-center whitespace-nowrap">
        Easy Web Worker Examples
        <button className="md:hidden lg:hidden">
          <TbLayoutSidebarLeftCollapse fontSize={26} color="#60a5fa" />
        </button>
      </h2>
    </aside>
  );
};
