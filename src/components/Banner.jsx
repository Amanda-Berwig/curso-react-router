import React from "react";

import banner from "../assets/cupcake.svg"; // Importando a imagem do banner

export default function Banner() {
  return (
    <div className="flex justify-between items-center bg-[#edd4d5] p-12">
      <div className="w-2/3">
        <h1 className="text-2xl mb-8">Mais do que lanches. Uma experiência!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          consectetur amet ullam. Qui cum, vero consequuntur suscipit, nesciunt
          saepe alias quibusdam officia esse magni nostrum, similique labore
          dolorum sunt quis.
        </p>
      </div>
      <div className="relative w-fit mx-auto z-10">
        {/* Círculos decorativos */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-[#df85ce] rounded-full w-68 h-68 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-[#df85ce] rounded-full w-12 h-12 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
          <div className="bg-[#df85ce] rounded-full w-18 h-18 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-[#df85ce] rounded-full w-12 h-12 absolute top-2/3 right-0 translate-x-[60%] -translate-y-[40%]"></div>
        </div>

        {/* Imagem */}
        <img src={banner} alt="Banner" className="relative z-10 w-64 md:w-72" />
      </div>
    </div>
  );
}
