import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TienVan010 from "./pages/TienVan010";
import BiodiversiteitTips from "./pages/BiodiversiteitTips";
import Dashboard_appsmith from "./pages/Dashboard"

import WaarnemingenPortaal from "./pages/WaarnemingenPortaal";
import HomePage from "./pages/HomePage";

function App() {
  return ( 
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waarnemingen-portaal" element={<WaarnemingenPortaal />} />
          <Route path="/10van010" element={<TienVan010 />} />
          <Route path="/biodiversiteit-tips" element={<BiodiversiteitTips />} />
          <Route path="/dashboard" element={<Dashboard_appsmith/>} />
        </Routes>
    </Router>
  );
}


export default App
