import { FiSun, FiMoon } from "react-icons/fi";

export const Thems = ({darkMode, setDarkMode}) => (
  <div
    className=" transform items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex  w-20  cursor-pointer select-none"
    onClick={() => setDarkMode(!darkMode)}
  >
    <span
      className={`w-4 h-4 rounded-full bg-white transition-transform ${
        darkMode ? "translate-x-0" : "translate-x-14"
      }`}
    ></span>
    <span className="text-xs absolute left-1 bottom-6 text-black dark:text-white">
      <FiMoon className={`text-lg mb-1 ${darkMode ? "text-white" : "text-black"}`}/>
    </span>
    <span className="text-xs absolute right-1 bottom-6 text-black dark:text-white">
      <FiSun className={`text-lg mb-1 ${darkMode ? "text-white" : "text-black"}`}/>
    </span>
  </div>
);
