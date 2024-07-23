import { ReactNode } from "react";
import { OrderStatusIcon } from "./order_status_icon";
import { IOrder } from "@common";

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
              {order.recipes.map((recipe) => (
                <p key={recipe.id}>{recipe.name}</p>
              ))}
            </div>
            <span className="text-sm text-[#A1824A]">{order.createdAt}</span>
          </div>
        </div>
      ))}
    </article>
  );
};
