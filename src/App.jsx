import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Banner from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Banner />
      <Routes>
        <Route path="/" element={<h1>Sobremesas</h1>} />
        <Route path="/bebidas" element={<h1>Bebidas</h1>} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
