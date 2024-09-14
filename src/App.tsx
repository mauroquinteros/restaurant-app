import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Orders } from "@pages/Orders";
import { Recipes } from "@pages/Recipes";
import { SocketProvider } from "./contexts/";

export const App = () => {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/stock" element={<Orders />} />
          <Route path="/history" element={<Orders />} />
          <Route path="/purchases" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
};
