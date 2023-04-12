import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LinearAlgebra from "./Pages/LinearAlgebra";
import MultivariableCalculus from "./Pages/MultivariableCalculus";
import Microcontroller from "./Pages/MicroController";
import Automata from "./Pages/Automata";
import DataStructure from "./Pages/DataStructure";
import NullSpaceSimul from "./Pages/NullSpaceSimul";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LinearAlgebra" element={<LinearAlgebra />} />
          <Route path="LinearAlgebra/NullSpaceSimul" element={<NullSpaceSimul />} />
          <Route path="MultivariableCalculus" element={<MultivariableCalculus />} />
          <Route path="Microcontroller" element={<Microcontroller />} />
          <Route path="Automata" element={<Automata />} />
          <Route path="DataStructure" element={<DataStructure />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;