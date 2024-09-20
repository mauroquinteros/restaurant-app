import { ReactNode } from "react";

interface OrderStatusIconProps {
  icon?: ReactNode;
}

export const OrderStatusIcon = ({ icon }: OrderStatusIconProps) => {
  return <div className="w-fit p-2 rounded-lg bg-[#F5F0E5]">{icon}</div>;
};
