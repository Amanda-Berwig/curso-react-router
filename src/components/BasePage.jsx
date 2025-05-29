import React from "react";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
      <Banner />
      {/* renderizar conteudo da rota aqui */}
      <Outlet />
      {/* O Outlet é usado para renderizar os componentes filhos dentro do BasePage */}
    </main>
  );
}
