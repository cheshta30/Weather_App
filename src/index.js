import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Weather from "./components/Weather"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);