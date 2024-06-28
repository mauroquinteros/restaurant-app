import { Layout } from "@components";
import { OrderStatus } from "@components";

export const Orders = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-x-20">
          <div className="w-64">
            <h3>Sidebar Menu Types</h3>
            <OrderStatus />
          </div>
          <div className="flex-1">Order List</div>
        </div>
      </Layout>
    </>
  );
};
