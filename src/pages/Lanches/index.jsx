import React from "react";
import Banner from "../../components/Banner";
import posts from "../../data.json"; // Supondo que você tenha um arquivo JSON com os dados dos lanches

export default function ShowLanches() {
  return (
    <div>
      <Banner />
      <h1>Informações sobre lanches</h1>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Preço: R$ {item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
