import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { createContext, useState } from "react";
export const siteName = createContext();
const App = () => {
  const [name,setName]= useState("Hosseinfarah")
  return (
  <siteName.Provider value={{name,setName}}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </siteName.Provider>
  );
};

export default App;
