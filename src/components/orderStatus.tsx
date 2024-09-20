import { ReactNode } from "react";
import { OrderStatusIcon } from "./orderStatusIcon";

interface OrderStatusProps {
  icon?: ReactNode;
  statusName?: string;
  statusCount?: number;
  statusMessage?: string;
}

export const OrderStatus = ({
  icon,
  statusName,
  statusCount,
  statusMessage,
}: OrderStatusProps) => {
  return (
    <>
      <li className="flex gap-4 items-center">
        <OrderStatusIcon icon={icon} />
        <div>
          <p>{statusName}</p>
          <p className="text-sm text-[#A1824A]">
            {statusCount} {statusMessage}
          </p>
        </div>
      </li>
    </>
  );
};
