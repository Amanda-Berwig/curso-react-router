import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import ShowLanches from "./pages/Lanches";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lanches" element={<ShowLanches />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
