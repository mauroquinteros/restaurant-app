import { useState } from "react";
import { IconClock, IconCircleCheck, IconFlag } from "@icons";
import { OrderStatus } from "./order_status";

export const OrderStatusSidebar = () => {
  const [orderStatus] = useState([
    {
      icon: <IconClock />,
      statusName: "Requested",
      statusCount: 3,
      statusMessage: "Orders in progress",
    },
    {
      icon: <IconCircleCheck />,
      statusName: "Preparing",
      statusCount: 5,
      statusMessage: "Ready to deliver",
    },
    {
      icon: <IconFlag />,
      statusName: "Prepared",
      statusCount: 10,
      statusMessage: "Completed orders",
    },
  ]);

  return (
    <>
      <ul className="flex flex-col gap-y-5">
        {orderStatus.map((status) => (
          <OrderStatus
            key={status.statusName}
            icon={status.icon}
            statusName={status.statusName}
            statusCount={status.statusCount}
            statusMessage={status.statusMessage}
          />
        ))}
      </ul>
    </>
  );
};
