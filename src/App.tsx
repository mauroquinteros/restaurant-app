import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Orders } from "@pages/Orders";
import { Recipes } from "@pages/Recipes";
import { SocketProvider } from "./contexts/";
import { Stock } from "@pages/Stock";
import { History } from "@pages/History";
import { Purchases } from "@pages/Purchases";

export const App = () => {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/history" element={<History />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
};
