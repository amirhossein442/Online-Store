import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Nav";
import { Shop } from "./Pages/Shop";
import { Card } from "./Pages/Card";
import { ShopContextProvider } from "./Context/ShopContext";
import { useState } from "react";
import { Footer } from "./Component/Footer";
import { FormControlPovider } from "./Context/FormControl";
import { SignInPage } from "./Pages/SignInPage";
import { LoginPage } from "./Pages/LoginPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white " : "bg-white text-black"
      }min-h-screen transition-colors duration-500`}
    >
      <Router>
        <FormControlPovider>
          <ShopContextProvider>
            <header
              className={`${
                darkMode ? "bg-white text-black" : "bg-black text-white"
              } shadow-md transition-colors duration-500`}
            >
              <Nav darkMode={darkMode} />
            </header>
            <Routes>
              <Route path="/" element={<LoginPage darkMode={darkMode}/>}></Route> 
              <Route path="/signin" element={<SignInPage darkMode={darkMode}/>}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/card" element={<Card />}></Route>
            </Routes>

            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
          </ShopContextProvider>
        </FormControlPovider>
      </Router>
    </div>
  );
}

export default App;
