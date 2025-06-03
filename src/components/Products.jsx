import React from "react";
import Button from "./Button";

export default function ProductCard({ item }) {
  return (
    <div className="flex flex-col items-center p-2 ">
      <picture>
        <source media="(max-width: 639px)" srcSet={item.image.mobile} />
        <source media="(max-width: 1023px)" srcSet={item.image.tablet} />
        <img
          src={item.image.desktop}
          alt={item.name}
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </picture>
      <p>{item.category}</p>
      <h2 className="font-semibold">{item.name}</h2>
      <p className="text-[#7D5A50] font-medium">
        Preço: R$ {item.price.toFixed(2)}{" "}
      </p>
      <Button />
    </div>
  );
}
