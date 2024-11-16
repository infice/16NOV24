import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const DataContext = createContext();
const data = [
  { id: 1, val: "aaa" },
  { id: 2, val: "bbb" },
  { id: 3, val: "ccc" },
];

createRoot(document.getElementById("root")).render(
  <DataContext.Provider value={data}>
    <App />
  </DataContext.Provider>
);

export default DataContext;
