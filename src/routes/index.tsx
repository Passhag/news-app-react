import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/Home";

const routes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};

export const AppRoutes = () => {
  const children = useRoutes([routes]);

  return <>{children}</>;
};
