import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Board } from "./pages/board/Board";
import { Settings } from "./pages/settings/Settings";
import { Issue } from "./pages/issue/Issue";
import { ErrorIssue } from "./pages/issue/ErrorIssue";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Navigate to="project/board" replace />,
      },
      {
        path: "project/board",
        element: <Board />,
      },
      {
        path: "project/settings",
        element: <Settings />,
      },
      {
        path: "project/issue/:projectId",
        element: <Issue />,
        errorElement: <ErrorIssue />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
