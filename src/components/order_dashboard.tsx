import { useContext, useEffect, useState } from "react";
import { GroupedOrdersByStatus } from "@common";
import { IconCircleCheck, IconClock, IconFlag } from "@icons";
import { OrderGroup } from "./order_group";
import { SocketContext } from "../contexts/";

export const OrderDashboard = () => {
  const context = useContext(SocketContext);
  const [groupedOrdersByStatus, setGroupedOrdersByStatus] =
    useState<GroupedOrdersByStatus>(null);

  useEffect(() => {
    context?.socket?.on("get_orders", (orders: GroupedOrdersByStatus) => {
      setGroupedOrdersByStatus(orders);
    });

    return () => {
      context?.socket?.off("get_orders");
    };
  }, [context?.socket]);

  return (
    <>
      <div className="mt-8">
        <OrderGroup
          icon={<IconClock />}
          status="requested"
          orders={groupedOrdersByStatus?.requested || []}
        />
      </div>
      <div className="mt-8">
        <OrderGroup
          icon={<IconCircleCheck />}
          status="preparing"
          orders={groupedOrdersByStatus?.preparing || []}
        />
      </div>
      <div className="mt-8">
        <OrderGroup
          icon={<IconFlag />}
          status="prepared"
          orders={groupedOrdersByStatus?.prepared || []}
        />
      </div>
    </>
  );
};
