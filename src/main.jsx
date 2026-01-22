import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Timetable from "./components/Timetable.jsx";

import Program from "./components/Program.jsx";

import TestIS from "./components/test/TestIS.jsx";
import MathEgeProf from "./components/test/MathEgeProf.jsx";
import RusOge from "./components/test/RusOge.jsx";
import MathOge from "./components/test/MachOge.jsx";
import SocOge from "./components/test/SocOge.jsx";
import EngOge from "./components/test/EngOge.jsx";

import Tests from "./components/Tests.jsx";
import RusEge from "./components/test/RusEge.jsx";
import SocEge from "./components/test/SocEge.jsx";
import EngEge from "./components/test/EngEge.jsx";
import MathEgeBase from "./components/test/MathEgeBase.jsx";
import SucsessPay from "./components/SucsessPay.jsx";
import FailPay from "./components/FailPay.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />

        <Route exact path="/successful-payment" element={<SucsessPay />} />
        <Route exact path="/failed-payment" element={<FailPay />} />

        <Route exact path="/timeTable" element={<Timetable />} />
        <Route exact path="/test" element={<Tests />} />

        <Route exact path="/trainingProgram" element={<Program />} />

        <Route exact path="/test/oge-rus" element={<RusOge />} />
        <Route exact path="/test/oge-math" element={<MathOge />} />
        <Route exact path="/test/oge-soc" element={<SocOge />} />
        <Route exact path="/test/oge-eng" element={<EngOge />} />
        <Route exact path="/test/ege-rus-base" element={<RusEge />} />
        <Route exact path="/test/ege-math-prof" element={<MathEgeProf />} />
        <Route exact path="/test/ege-math-base" element={<MathEgeBase />} />

        <Route exact path="/test/ege-soc" element={<SocEge />} />
        <Route exact path="/test/ege-eng" element={<EngEge />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
