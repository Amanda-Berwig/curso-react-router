import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import ShowLanches from "./pages/Lanches";
import BasePage from "./components/BasePage";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/lanches" element={<ShowLanches />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
