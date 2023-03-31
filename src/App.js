import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LinearAlgebra from "./Pages/LinearAlgebra";
import NullSpaceSimul from "./Pages/NullSpaceSimul";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LinearAlgebra" element={<LinearAlgebra />} />
          <Route path="LinearAlgebra/NullSpaceSimul" element={<NullSpaceSimul />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;