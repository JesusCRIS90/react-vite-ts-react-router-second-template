import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";

import { SideBar } from "../components/Sidebar/SideBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout rootComponent={SideBar} />,
    loader: undefined,
    action: undefined,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "/index",
            element: <Index />,
            loader: undefined,
            action: undefined,
          },
          /* The rest of the Routes */
        ],
      },
    ],
  },
  /* The rest of the Individual Routes --> No the same RootLayout */
]);
