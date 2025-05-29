import React from "react";

export default function Button() {
  return (
    <div className="flex items-center justify-center gap-2 bg-[#F4F1E6] p-2 rounded-lg shadow-md hover:bg-[#D9D9D9] transition-colors duration-300 cursor-pointer">
      <img
        src="/assets/images/icon-add-to-cart.svg"
        alt="carrinho de compras"
      />
      <p>Adicionar</p>
    </div>
  );
}
