import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LinearAlgebra from "./Pages/LinearAlgebra";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LinearAlgebra" element={<LinearAlgebra />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;