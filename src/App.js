// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Batteries from "./pages/Batteries";
import General from "./pages/General";
import Propulsion from "./pages/Propulsion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/batteries" element={<Batteries />} />
          <Route path="/propulsion" element={<Propulsion />} />
          {/* si une mauvaise route est rentré dans la barre d'url je renvoi à la racine */}
          <Route path="*" element={<General />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
