import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AppRoot } from "./routes/app/root";
import { IssueError } from "@/features/issue/components/issue-error";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LandingRoute } = await import("./routes/landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "/project",
      element: <AppRoot />,
      children: [
        {
          path: "board",
          lazy: async () => {
            const { BoardRoute } = await import("./routes/app/board");
            return { Component: BoardRoute };
          },

          loader: async () => {
            const { boardLoader } = await import("./routes/app/board");
            return boardLoader(queryClient)();
          },
        },
        {
          path: "reports",
          lazy: async () => {
            const { ReportsRoute } = await import("./routes/app/reports");
            return { Component: ReportsRoute };
          },

          loader: async () => {
            const { reportsLoader } = await import("./routes/app/reports");
            return reportsLoader(queryClient)();
          },
        },
        {
          path: "settings",
          lazy: async () => {
            const { SettingsRoute } = await import("./routes/app/settings");
            return { Component: SettingsRoute };
          },
        },
        {
          path: "issue/:issueId",
          errorElement: <IssueError />,
          lazy: async () => {
            const { IssueRoute } = await import("./routes/app/issue");
            return { Component: IssueRoute };
          },

          loader: async (args: LoaderFunctionArgs) => {
            const { issueLoader } = await import("./routes/app/issue");
            return issueLoader(queryClient)(args);
          },
        },
        {
          path: "",
          element: <Navigate to="board" replace />,
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
