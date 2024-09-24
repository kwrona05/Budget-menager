import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BudgetApp from "./BudgetApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BudgetApp />
  </StrictMode>
);
