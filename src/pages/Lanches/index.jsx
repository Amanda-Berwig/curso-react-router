import React from "react";
import Banner from "../../components/Banner";
import posts from "../../data.json"; // Supondo que você tenha um arquivo JSON com os dados dos lanches
import Products from "../../components/Products";

export default function ShowLanches() {
  return (
    <div>
      <Banner />
      <h1>Informações sobre lanches</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {posts.map((item, index) => (
          <li key={index}>
            <Products item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
