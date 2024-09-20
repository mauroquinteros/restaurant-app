import { useState } from "react";
import { IconMinus, IconPlus } from "../icons";

export const OrderForm = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const response = await fetch("https://api.mauroquinteros.site/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });
    await response.json();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-6">
      <div className="flex items-center gap-x-2">
        <button
          className="w-fit p-1 rounded-md bg-[#F5F0E5] hover:bg-[#d7c09a]"
          type="button"
          onClick={decreaseQuantity}
        >
          <IconMinus size={24} />
        </button>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={(ev) => setQuantity(Number(ev.target.value))}
          className="w-6 text-center"
        />
        <button
          className="w-fit p-1 rounded-md bg-[#F5F0E5] hover:bg-[#d7c09a]"
          type="button"
          onClick={increaseQuantity}
        >
          <IconPlus size={24} />
        </button>
      </div>
      <button
        type="submit"
        className="px-5 py-3 text-white font-bold rounded-lg bg-[#0abf7b] hover:bg-[#009963]"
      >
        New Order
      </button>
    </form>
  );
};
