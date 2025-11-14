import { Thems } from "./Thems";

export const Footer = ({darkMode,setDarkMode}) => (
    <div className={`flex flex-col gap-8 items-center  shadow-inner py-3  mt-24  bottom-0 h-24 `}>
        <p className="">Developed by: Amirhossein</p>
        <Thems darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
)