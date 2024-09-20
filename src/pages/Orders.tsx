import { useContext, useEffect, useState } from "react";
import { GroupedOrdersByStatus } from "../common";
import { SocketContext } from "../contexts";
import {
  Layout,
  OrderStatusSidebar,
  OrderForm,
  OrderGroupList,
} from "../components";

export const Orders = () => {
  const context = useContext(SocketContext);
  const [groupedOrdersByStatus, setGroupedOrdersByStatus] =
    useState<GroupedOrdersByStatus>(null);

  useEffect(() => {
    context?.socket?.emit("request_orders");

    context?.socket?.on("get_orders", (orders: GroupedOrdersByStatus) => {
      setGroupedOrdersByStatus(orders);
    });

    return () => {
      context?.socket?.off("get_orders");
    };
  }, [context?.socket]);

  return (
    <Layout>
      <div className="flex gap-x-20">
        <div className="w-64">
          <h3 className="text-2xl font-bold mb-6">Order Status</h3>
          <OrderStatusSidebar orders={groupedOrdersByStatus} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-6">Order List</h3>
          <OrderForm />
          <OrderGroupList orders={groupedOrdersByStatus} />
        </div>
      </div>
    </Layout>
  );
};
