import React from "react";

import banner from "../assets/banner.jpg"; // Importando a imagem do banner

export default function Banner() {
  return (
    <div
      className="bg-cover bg-center h-96 w-full p-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-2/3 items-center m-4">
        <h1 className="text-3xl my-12 ml-8">
          Mais do que lanches. Uma experiência!
        </h1>
        <p className="text-lg w-2/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          consectetur amet ullam. Qui cum, vero consequuntur suscipit, nesciunt
          saepe alias quibusdam officia esse magni nostrum, similique labore
          dolorum sunt quis.
        </p>
      </div>
    </div>
  );
}
