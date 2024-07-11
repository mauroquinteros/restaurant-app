import { Layout, OrderStatusSidebar } from "@components";
import { OrderForm } from "../components/order_form";

export const Orders = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-x-20">
          <div className="w-64">
            <h3 className="text-2xl font-bold mb-6">Order Status</h3>
            <OrderStatusSidebar />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">Order List</h3>
            <OrderForm />
          </div>
        </div>
      </Layout>
    </>
  );
};
