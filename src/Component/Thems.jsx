import { FiSun, FiMoon } from "react-icons/fi";

export const Thems = ({darkMode, setDarkMode}) => (
  <div
    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center w-24 justify-between cursor-pointer select-none"
    onClick={() => setDarkMode(!darkMode)}
  >
    <span
      className={`w-5 h-5 rounded-full bg-white transition-transform ${
        darkMode ? "translate-x-0" : "translate-x-16"
      }`}
    ></span>
    <span className="text-xs absolute left-2 bottom-8 text-black dark:text-white">
      <FiMoon className={`text-lg mb-1 ${darkMode ? "text-white" : "text-black"}`}/>
    </span>
    <span className="text-xs absolute right-2 bottom-8 text-black dark:text-white">
      <FiSun className={`text-lg mb-1 ${darkMode ? "text-white" : "text-black"}`}/>
    </span>
  </div>
);
