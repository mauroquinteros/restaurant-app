import { IconClock } from "@icons";
import { OrderGroup } from "./order_group";
import { useEffect, useState } from "react";
import { GroupedOrdersByStatus } from "@common";

export const OrderDashboard = () => {
  const [groupedOrdersByStatus, setGroupedOrdersByStatus] =
    useState<GroupedOrdersByStatus>(null);

  useEffect(() => {
    setGroupedOrdersByStatus({
      requested: [
        {
          id: "664fb69f4131f6518bdebecc",
          quantity: 1,
          state: "prepared",
          recipes: [
            {
              id: "662c1ccbd11ac5dc9d40de23",
              name: "cheese hamburger",
            },
            {
              id: "662c1ccbd11ac5dc9d40de17",
              name: "chicken salad",
            },
          ],
          createdAt: "23-05-2024 16:35:27",
        },
        {
          id: "664fb69f4131f6518bdebecd",
          quantity: 1,
          state: "prepared",
          recipes: [
            {
              id: "662c1ccbd11ac5dc9d40de23",
              name: "cheese hamburger",
            },
            {
              id: "662c1ccbd11ac5dc9d40de17",
              name: "chicken salad",
            },
          ],
          createdAt: "23-05-2024 16:35:27",
        },
      ],
    });
  }, []);

  return (
    <div className="mt-8">
      <OrderGroup
        icon={<IconClock />}
        status="requested"
        orders={groupedOrdersByStatus?.requested || []}
      />
    </div>
  );
};
