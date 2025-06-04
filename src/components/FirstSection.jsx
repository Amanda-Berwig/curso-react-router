import React from "react";
import Bebidas from "../assets/bebidas.webp";
import Doces from "../assets/doces.webp";
import { BasicButton } from "./BasicButton";
import { useNavigate } from "react-router-dom";

export const FirstSection = () => {
  const navegar = useNavigate();

  return (
    <section className="flex w-full h-1/2 px-30 gap-3">
      {/* bebidas */}
      <div className="relative w-1/3 h-full overflow-hidden">
        <img
          src={Bebidas}
          alt="Categoria Bebidas"
          className="w-full h-full brightness-75 transition-transform duration-300 hover:scale-105 object-cover"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          BEBIDAS
        </span>
      </div>
      {/* doces */}
      <div className="relative w-1/3 h-full overflow-hidden">
        <img
          src={Doces}
          alt=""
          className="w-full h-full object-cover brightness-75 transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold pointer-events-none">
          DOCES
        </span>
      </div>
      {/* E MUITO MAIS */}
      <div className="w-1/3 bg-[#f5ece3] flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#7D5A50] tracking-widest mb-8 text-2xl font-medium">
          E MUITO MAIS...
        </p>
        <BasicButton onClick={() => navegar("/Cardapio")}>
          VEJA NOSSO CARDÁPIO
        </BasicButton>
      </div>
    </section>
  );
};
