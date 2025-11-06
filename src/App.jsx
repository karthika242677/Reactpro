import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Dynamic from "./pages/Dynamic";
import { ContextProvider } from "./context/ContextProvider";
const App = () => {
  return (
    
      <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dynamic/:id" element={<Dynamic/>} />
        </Routes>
            </ContextProvider>

      </BrowserRouter>
  );
};

export default App;
