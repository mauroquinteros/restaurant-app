import { Route, Routes } from "react-router";
import { Orders } from "@pages/orders";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/about" element={<Orders />} />
    </Routes>
  );
};
