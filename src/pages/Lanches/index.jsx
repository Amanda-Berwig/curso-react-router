import posts from "../../data.json";
import ProductCard from "../../components/Products";

export default function ProductList() {
  return (
    <div>
      <h1>Informações sobre lanches</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {posts.map((item, index) => (
          <li key={index}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
