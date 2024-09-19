/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from "@components";
import { useFetch } from "@hooks";
import { useMemo } from "react";

export const Purchases = () => {
  const options = useMemo(() => ({}), []);
  const queryParam = useMemo(() => ({ fullList: true }), []);
  const { data } = useFetch("market/purchases", queryParam, options);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-base text-left">
            <thead className="text-base text-neutral-700 bg-[#f5f0e5]">
              <tr>
                <th className="w-[100px] p-4 font-semibold">ID</th>
                <th className="p-4 font-semibold">Ingredient</th>
                <th className="p-4 font-semibold">State</th>
                <th className="p-4 font-semibold">Created at</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {data?.map(
                (
                  purchase: {
                    id: string;
                    ingredient: string;
                    quantity: number;
                    createdAt: string;
                  },
                  index
                ) => (
                  <tr key={purchase.id} className="border-b hover:bg-gray-100">
                    <td className="w-[100px] p-4 capitalize">{index + 1}</td>
                    <td className="w-[250px] p-4 capitalize">
                      {purchase.ingredient}
                    </td>
                    <td className="w-[250px] p-4 capitalize">
                      {purchase.quantity}
                    </td>
                    <td className="w-[250px] p-4 capitalize">
                      {purchase.createdAt}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
