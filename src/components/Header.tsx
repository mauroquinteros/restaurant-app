import { IconShoppingCartFilled } from "@tabler/icons-react";
import { useState } from "react";

export const Header = () => {
  const [links] = useState([
    {
      name: "Orders",
      url: "/",
    },
    {
      name: "Recipes",
      url: "/recipes",
    },
    {
      name: "Stock",
      url: "/stock",
    },
    {
      name: "History",
      url: "/history",
    },
    {
      name: "Purchases",
      url: "/purchases",
    },
  ]);

  return (
    <header className="py-6 border-b-2 border border-transparent border-b-[#E5E8EB]">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <a className="flex flex-row items-center gap-4" href="/">
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
