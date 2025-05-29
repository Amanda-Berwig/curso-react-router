import React from "react";

export default function Products({ item }) {
  return (
    <div>
      <img src={item.image.desktop} alt={item.name} />
      <p>{item.category}</p>
      <h2>{item.name}</h2>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
    </div>
  );
}
