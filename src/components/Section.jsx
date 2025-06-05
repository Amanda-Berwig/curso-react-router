import React from "react";
import { BasicButton } from "./BasicButton";
import DoceSection from "../assets/doce.webp";

export const Section = () => {
  return (
    <section className="flex p-28  items-center justify-center text-[#7D5A50]">
      <div className="w-1/2 flex items-center justify-center">
        <img src={DoceSection} alt="Doce" className="w-96" />
      </div>
      <div className="w-1/2 mr-8">
        <h1 className="text-lg font-bold">COMPROMISSO COM A QUALIDADE</h1>
        <h2 className="text-2xl uppercase my-6 font-semibold">
          Fabricação própria com reposição diária
        </h2>
        <p className="text-base mb-10">
          <strong className="font-bold">
            Nossos processos são otimizados para garantir que todos os produtos
            sejam entregues fresquinhos para você.
          </strong>
          Nossas bebidas são preparadas na hora! Nossos pães e doces são
          produzidos e repostos diariamente. Prezamos pela qualidade e
          excelência em cada detalhe.
        </p>
        <BasicButton>Saiba mais</BasicButton>
      </div>
    </section>
  );
};
