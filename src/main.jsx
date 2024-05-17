import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Index from "./pages/Index/Index.jsx";
import Predictions from "./pages/Predictions/Predictions.jsx";
import Error from "./pages/Error/Error.jsx";
import Profile from "./pages/Profile/Profile.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/predictions",
        element: <Predictions />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
