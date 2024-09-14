import { IconCircleCheck, IconClock, IconFlag } from "@icons";
import { OrderGroup } from "./order_group";
import { GroupedOrdersByStatus } from "@common";

export const OrderDashboard = ({
  orders,
}: {
  orders: GroupedOrdersByStatus;
}) => {
  return (
    <>
      <div className="mt-8">
        <OrderGroup
          icon={<IconClock />}
          status="requested"
          orders={orders?.requested || []}
        />
      </div>
      <div className="mt-8">
        <OrderGroup
          icon={<IconCircleCheck />}
          status="preparing"
          orders={orders?.preparing || []}
        />
      </div>
      <div className="mt-8">
        <OrderGroup
          icon={<IconFlag />}
          status="prepared"
          orders={orders?.prepared || []}
        />
      </div>
    </>
  );
};
