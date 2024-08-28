import { useContext, useEffect, useState } from "react";
import { IconClock, IconCircleCheck, IconFlag } from "@icons";
import { OrderStatus } from "./order_status";
import { SocketContext } from "@contexts";
import { GroupedOrdersByStatus } from "@common";

export const OrderStatusSidebar = () => {
  const context = useContext(SocketContext);
  const [orderStatus, setOrderStatus] = useState<
    {
      icon?: JSX.Element;
      statusName?: string;
      statusCount?: number;
      statusMessage?: string;
    }[]
  >([]);

  useEffect(() => {
    context?.socket?.on("get_orders", (orders: GroupedOrdersByStatus) => {
      const status = [
        {
          icon: <IconClock />,
          statusName: "Requested",
          statusCount: orders?.requested?.length,
          statusMessage: "Orders in progress",
        },
        {
          icon: <IconCircleCheck />,
          statusName: "Preparing",
          statusCount: orders?.preparing?.length,
          statusMessage: "Ready to deliver",
        },
        {
          icon: <IconFlag />,
          statusName: "Prepared",
          statusCount: orders?.prepared?.length,
          statusMessage: "Completed orders",
        },
      ];

      setOrderStatus(status);
    });

    return () => {
      context?.socket?.off("get_orders");
    };
  }, [context?.socket]);

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
