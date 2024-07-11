import { useState } from "react";
import { routes } from "@common";
import { IconShoppingCartFilled } from "@icons";

export const Header = () => {
  const [links] = useState([
    {
      name: "Orders",
      url: routes.orders,
    },
    {
      name: "Recipes",
      url: routes.recipes,
    },
    {
      name: "Stock",
      url: routes.stock,
    },
    {
      name: "History",
      url: routes.history,
    },
    {
      name: "Purchases",
      url: routes.purchases,
    },
  ]);

  return (
    <header className="px-4 py-6 border-b-2 border border-transparent border-b-[#E5E8EB]">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <a className="flex flex-row items-center gap-4" href={routes.orders}>
          <IconShoppingCartFilled size={24} />
          <p className="m-0 text-4xl font-bold italic">Orderly</p>
        </a>
        <nav className="flex gap-x-4 text-base">
          {links.map((link) => (
            <a key={link.url} href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
