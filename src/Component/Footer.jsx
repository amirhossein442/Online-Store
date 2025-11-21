import { useContext } from "react";
import { Thems } from "./Thems";
import { FormControlContext } from "../Context/FormControl";

export const Footer = ({ darkMode, setDarkMode }) => {
  const { handleLogout, user } = useContext(FormControlContext);
  return (
    <div
      className={`flex flex-col gap-6 items-center  shadow-inner py-3  mt-20  bottom-0 `}
    >
      <p className="">Developed by: Amirhossein</p>
      <div className="flex items-center gap-3 ">
        <Thems darkMode={darkMode} setDarkMode={setDarkMode} />

        {user && (
          <button
            className=" px-4 py-2 bg-rose-500 text-white rounded-md"
            onClick={handleLogout}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
};
