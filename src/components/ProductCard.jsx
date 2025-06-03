import { useCart } from "../context/CartContext";
import ButtonAddOrCounter from "./Button";

export default function ProductCard({ item }) {
  const { getProductQuantity } = useCart();
  const quantity = getProductQuantity(item.name);
  return (
    <div className="flex flex-col items-center p-2 text-[#333333]">
      <picture>
        <source media="(max-width: 639px)" srcSet={item.image.mobile} />
        <source media="(max-width: 1023px)" srcSet={item.image.tablet} />
        <img
          src={item.image.desktop}
          alt={item.name}
          className={`w-full h-auto rounded-2xl shadow-lg ${
            quantity > 0 ? "border-2 border-[#FF6B8B]" : ""
          }`}
        />
      </picture>
      <p className="text-[#8F7674] font-light">{item.category} </p>
      <h2 className="font-bold">{item.name}</h2>
      <p className="text-[#4c4747] font-medium">
        Preço: R$ {item.price.toFixed(2)}{" "}
      </p>
      <ButtonAddOrCounter product={item} />
    </div>
  );
}
