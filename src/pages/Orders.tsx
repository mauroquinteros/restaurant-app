import { Layout } from "@components/layout";

export const Orders = () => {
  return (
    <>
      <Layout>
        <div className="flex gap-x-20">
          <div className="w-64">Sidebar Menu Types</div>
          <div className="flex-1">Order List</div>
        </div>
      </Layout>
    </>
  );
};
