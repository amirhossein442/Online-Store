import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Nav";
import { Shop } from "./Pages/Shop";
import { Card } from "./Pages/Card";
import { ShopContextProvider } from "./Context/ShopContext";
import { useState } from "react";
import { Thems } from "./Component/Thems";
import { Footer } from "./Component/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true); 
  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500`}
    >
      <ShopContextProvider>
        <Router>
          <header
            className={`${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            } shadow-md transition-colors duration-500`}
          >
            <Nav darkMode={darkMode}/>
          </header>

          <Routes>
            <Route path="/"  element={<Shop />}></Route>
            <Route path="/card" element={<Card />}></Route>
          </Routes>
        </Router>
        <Footer />
        <Thems darkMode={darkMode} setDarkMode={setDarkMode}/>
      </ShopContextProvider>
      </div>
  );
}

export default App;
