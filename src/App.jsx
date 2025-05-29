import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lanches" element={<h1>Lanches</h1>} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
