import { IconCircleCheck, IconClock, IconFlag } from "../icons";
import { OrderGroup } from "./orderGroup";
import { GroupedOrdersByStatus } from "../common";

export const OrderGroupList = ({
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
