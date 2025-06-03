import { useCart } from "../context/CartContext";
import { MdAddShoppingCart } from "react-icons/md";

import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

export default function ButtonAddOrCounter({ product }) {
  const { addToCart, increment, decrement, getProductQuantity } = useCart();
  const quantity = getProductQuantity(product.name);

  return quantity === 0 ? (
    <button
      onClick={() => addToCart(product)}
      className="flex items-center gap-4 border-1 border-[#4c4747] rounded-2xl p-2 shadow-lg text-[#4c4747] hover:text-[#FF6B8B] hover:border-[#FF6B8B] hover:shadow-none transition-colors duration-300"
    >
      <MdAddShoppingCart size={20} />
      <span>Adicionar ao carrinho</span>
    </button>
  ) : (
    <div className="flex items-center justify-center w-30 gap-4 border-1 border-[#FF6B8B] rounded-2xl p-2 shadow-lg text-[#FF6B8B] hover:text-white hover:bg-[#FF6B8B] hover:shadow-none transition-colors duration-300">
      <button onClick={() => decrement(product.name)}>
        <IoMdRemoveCircleOutline size={20} />
      </button>
      <span>{quantity}</span>
      <button onClick={() => increment(product.name)}>
        <IoAddCircleOutline size={20} />
      </button>
    </div>
  );
}
