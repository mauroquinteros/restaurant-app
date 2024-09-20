import { ReactNode } from "react";
import { OrderStatusIcon } from "./orderStatusIcon";
import { IOrder } from "../common";

interface OrderGroupProps {
  icon: ReactNode;
  status: string;
  orders: IOrder[];
}

export const OrderGroup = ({ icon, status, orders }: OrderGroupProps) => {
  return (
    <article>
      <h3 className="text-xl font-bold capitalize">{status}</h3>
      {orders.map((order) => (
        <div key={order.id} className="flex items-center gap-x-4 pt-6">
          <OrderStatusIcon icon={icon} />
          <div className="flex-1 flex items-center justify-between">
            <div className="capitalize">
              {order.recipes.map((recipe, index) => (
                <p key={`${index}${recipe.id}`}>{recipe.name}</p>
              ))}
            </div>
            <span className="min-w-36 text-sm text-[#A1824A] text-right">
              {order.createdAt}
            </span>
          </div>
        </div>
      ))}
    </article>
  );
};
