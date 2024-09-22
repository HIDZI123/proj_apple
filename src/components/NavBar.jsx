import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const NavBar = () => {
  return (
    <header className="w-full py-5 px-5 sm:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width ">
        <img src={appleImg} alt="apple logo" width={14} height={18} />

        <div className="flex flex-1 justify-center items-center max-sm:hidden">
          {navLists.map((nav, index) => (
            <div
              key={index}
              className="px-5 text-sm text-gray hover:text-white transition-all cursor-pointer"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1 cursor-pointer">
          <img src={searchImg} alt="Search Image" height={18} width={18} />
          <img src={bagImg} alt="Bag Image" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
