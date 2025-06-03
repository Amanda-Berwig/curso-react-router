import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Inicio from "./pages/Inicio";
import BasePage from "./components/BasePage";
import ProductList from "./pages/Lanches";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Inicio />} />
            <Route path="lanches" element={<ProductList />} />
          </Route>

          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
