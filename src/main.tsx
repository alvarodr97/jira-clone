import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { Board } from "./features/board/components/Board";
import { Reports } from "./features/reports/components/Reports";
import { Settings } from "./features/settings/components/Settings";
import { Issue } from "./features/issue/components/Issue";
import { ErrorIssue } from "./features/issue/components/ErrorIssue";
import { MainError } from "./components/errors/MainError";

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
        path: "project/reports",
        element: <Reports />,
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
    errorElement: <MainError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
