import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import { Board } from './pages/board/Board';
import { Settings } from './pages/settings/Settings';
// import { Issue } from './pages/issue/Issue';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "project/board",
        element: <Board />
      },
      {
        path: "project/settings",
        element: <Settings />
      },
      // {
      //   path: "project/issue/:projectId",
      //   element: <Issue />
      // },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
