import { IconClock, IconCircleCheck, IconFlag } from "@icons";
import { OrderStatusIcon } from "./order_status_icon";

export const OrderStatus = () => {
  return (
    <>
      <h3>Order Status</h3>
      <ul>
        <li>
          <OrderStatusIcon icon={<IconClock />} />
          <p>Requested</p>
        </li>
        <li>
          <OrderStatusIcon icon={<IconCircleCheck />} />
          <p>Preparing</p>
        </li>
        <li>
          <OrderStatusIcon icon={<IconFlag />} />
          <p>Prepared</p>
        </li>
      </ul>
    </>
  );
};
