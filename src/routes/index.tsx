import { lazy } from "react";
import { ROUTES } from "@/constants/route";
import Home from "@/views/home";
import DetailJob from "@/views/detail-job";
import ErrorPage from "@/views/not-found";
import DefaultLayout from "@/views/layout/default-layout";

const ChildRoutes: any = [
  { path: ROUTES.HOME, element: <Home />},
  { path: ROUTES.DETAIL_JOB, element: <DetailJob />},
];

const rootRoute: any = [
  {
    path: ROUTES.HOMEPAGE,
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: ChildRoutes,
  },
];

export { rootRoute, ChildRoutes };
