import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LinearAlgebra from "./Pages/LinearAlgebra/LinearAlgebra";
import LinearAlgebraQuiz from "./Pages/LinearAlgebra/Quiz";
import LinearAlgebraQuestion from "./Pages/LinearAlgebra/Question";
import Simulation from "./Pages/LinearAlgebra/Simulation.tsx";

import MultivariableCalculus from "./Pages/MultivariableCalculus/MultivariableCalculus";
import MultivariableCalculusQuiz from "./Pages/MultivariableCalculus/Quiz";
import MultivariableCalculusQuestion from "./Pages/MultivariableCalculus/Question";

import Microcontroller from "./Pages/MicroController/MicroController";
import MicrocontrollerQuiz from "./Pages/MicroController/Quiz";
import MicrocontrollerQuestion from "./Pages/MicroController/Question";

import Automata from "./Pages/Automata/Automata";
import AutomataQuiz from "./Pages/Automata/Quiz";
import AutomataQuestion from "./Pages/Automata/Question";
import GraphSimulation from "./Pages/Automata/GraphSimulation";

import DataStructure from "./Pages/DataStructure/DataStructure";
import DataStructureQuiz from "./Pages/DataStructure/Quiz";
import DataStructureQuestion from "./Pages/DataStructure/Question";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LinearAlgebra" element={<LinearAlgebra />} />
          <Route path="LinearAlgebra/Question" element={<LinearAlgebraQuestion />} />
          <Route path="LinearAlgebra/Quiz" element={<LinearAlgebraQuiz />} />
          <Route path="LinearAlgebra/Simulation" element={<Simulation />} />
          
          <Route path="MultivariableCalculus" element={<MultivariableCalculus />} />
          <Route path="MultivariableCalculus/Quiz" element={<MultivariableCalculusQuiz />} />
          <Route path="MultivariableCalculus/Question" element={<MultivariableCalculusQuestion />} />

          <Route path="Microcontroller" element={<Microcontroller />} />
          <Route path="Microcontroller/Quiz" element={<MicrocontrollerQuiz />} />
          <Route path="Microcontroller/Question" element={<MicrocontrollerQuestion />} />

          <Route path="Automata" element={<Automata />} />
          <Route path="Automata/Quiz" element={<AutomataQuiz />} />
          <Route path="Automata/Question" element={<AutomataQuestion />} />
          <Route path="Automata/GraphSimulation" element={<GraphSimulation />} />

          <Route path="DataStructure" element={<DataStructure />} />
          <Route path="DataStructure/Quiz" element={<DataStructureQuiz />} />
          <Route path="DataStructure/Question" element={<DataStructureQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;