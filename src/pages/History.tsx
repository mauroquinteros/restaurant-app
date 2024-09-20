/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Layout } from "../components";
import { useFetch } from "../hooks";

export const History = () => {
  const options = useMemo(() => ({}), []);
  const queryParam = useMemo(() => ({ fullList: true }), []);
  const { data } = useFetch("orders", queryParam, options);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-base text-left">
            <thead className="text-base text-neutral-700 bg-[#f5f0e5]">
              <tr>
                <th className="w-[100px] p-4 font-semibold">ID</th>
                <th className="w-[250px] p-4 font-semibold">State</th>
                <th className="p-4 font-semibold">Recipes</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {data?.map(
                (
                  order: {
                    id: string;
                    name: string;
                    state: string;
                    recipes: any[];
                  },
                  index
                ) => (
                  <tr key={order.id} className="border-b hover:bg-gray-100">
                    <td className="w-[100px] p-4 capitalize">{index + 1}</td>
                    <td className="w-[250px] p-4 capitalize">{order.state}</td>
                    <td className="p-4">
                      {order.recipes.map((recipe: any, index) => (
                        <span key={index}>
                          {recipe.name}
                          {index < order.recipes.length - 1 && ", "}
                        </span>
                      ))}
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
