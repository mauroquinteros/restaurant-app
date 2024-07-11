import { IconMinus, IconPlus } from "@icons";
import { useState } from "react";

export const OrderForm = () => {
  const [orderCount, setOrderCount] = useState(1);

  const decreaseOrderCount = () => {
    if (orderCount > 1) setOrderCount(orderCount - 1);
  };

  const increaseOrderCount = () => {
    setOrderCount(orderCount + 1);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log({ orderCount });
    console.log("Order submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-x-6">
      <div className="flex items-center gap-x-2">
        <button
          className="w-fit p-1 rounded-md bg-[#F5F0E5] hover:bg-[#d7c09a]"
          type="button"
          onClick={decreaseOrderCount}
        >
          <IconMinus size={24} />
        </button>
        <input
          type="number"
          value={orderCount}
          min={1}
          onChange={(ev) => setOrderCount(Number(ev.target.value))}
          className="w-6 text-center"
        />
        <button
          className="w-fit p-1 rounded-md bg-[#F5F0E5] hover:bg-[#d7c09a]"
          type="button"
          onClick={increaseOrderCount}
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
