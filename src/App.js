import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              {/* path="*" si l'url ne correspond à rien de déclaré au dessus */}
              {/* Peut renvoyer vers une page Error 404 par exemple !! */}
              <Route path="*" element={<Home />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;
