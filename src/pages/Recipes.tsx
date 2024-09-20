/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { Layout } from "../components";
import { useFetch } from "../hooks";

export const Recipes = () => {
  const options = useMemo(() => ({}), []);
  const queryParam = useMemo(() => ({}), []);
  const { data } = useFetch("recipes", queryParam, options);

  return (
    <Layout>
      <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed text-base text-left">
            <thead className="text-base text-neutral-700 bg-[#f5f0e5]">
              <tr>
                <th className="w-[250px] p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Ingredients</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {data?.map(
                (recipe: { id: string; name: string; ingredients: any[] }) => (
                  <tr key={recipe.id} className="border-b hover:bg-gray-100">
                    <td className="w-[250px] p-4 capitalize">{recipe.name}</td>
                    <td className="p-4">
                      {recipe.ingredients.map((ingredient: any, index) => (
                        <span key={index}>
                          {ingredient.quantity} {ingredient.name}
                          {index < recipe.ingredients.length - 1 && ", "}
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
