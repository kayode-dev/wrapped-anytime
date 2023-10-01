import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import Review from "./components/review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="callback" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
