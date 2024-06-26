import React from "react";
import ReactDOM from "react-dom/client";

import { Orders } from "@pages/orders";

import "@fontsource-variable/work-sans";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Orders />
  </React.StrictMode>
);
