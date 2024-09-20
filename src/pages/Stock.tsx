import { useMemo } from "react";
import { Layout } from "../components";
import { useFetch } from "../hooks";

export const Stock = () => {
  const options = useMemo(() => ({}), []);
  const queryParam = useMemo(() => ({}), []);
  const { data } = useFetch("ingredients", queryParam, options);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-base text-left">
            <thead className="text-base text-neutral-700 bg-[#f5f0e5]">
              <tr>
                <th className="w-[250px] p-4 font-semibold">Ingredient</th>
                <th className="p-4 font-semibold">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {data?.map(
                (ingredient: { id: string; name: string; stock: number }) => (
                  <tr
                    key={ingredient.id}
                    className="border-b hover:bg-gray-100"
                  >
                    <td className="w-[250px] p-4 capitalize">
                      {ingredient.name}
                    </td>
                    <td className="p-4">{ingredient.stock}</td>
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
