/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from "@components";
import { useFetch } from "@hooks";
import { useMemo } from "react";

export const Recipes = () => {
  const options = useMemo(() => ({}), []);
  const { data } = useFetch("recipes", options);

  return (
    <Layout>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider"
            >
              Ingredients
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map(
            (recipe: { id: string; name: string; ingredients: any[] }) => (
              <tr key={recipe.id}>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-neutral-800 capitalize">
                  {recipe.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-neutral-800 capitalize">
                  {recipe.ingredients.map((ingredient: any, index) => (
                    <p key={index}>
                      {ingredient.name} {ingredient.quantity}
                    </p>
                  ))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Layout>
  );
};
