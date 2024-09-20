import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./contexts/";
import { History, Orders, Purchases, Recipes, Stock } from "./pages";
import { routes } from "./common";

export const App = () => {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.orders} element={<Orders />} />
          <Route path={routes.recipes} element={<Recipes />} />
          <Route path={routes.stock} element={<Stock />} />
          <Route path={routes.history} element={<History />} />
          <Route path={routes.purchases} element={<Purchases />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
};
