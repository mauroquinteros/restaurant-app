import { Route, Routes } from "react-router";
import { Orders } from "./pages/orders";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./contexts/socketContext";

export const App = () => {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/recipes" element={<Orders />} />
          <Route path="/stock" element={<Orders />} />
          <Route path="/history" element={<Orders />} />
          <Route path="/purchases" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
};
