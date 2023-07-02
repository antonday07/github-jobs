import { lazy } from "react";
import { ROUTES } from "@/constants/route";
import Home from "@/views/home";
import DetailJob from "@/views/detail-job";

const publicRoutes: any = [
  { path: ROUTES.HOMEPAGE, element: <Home /> },
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.DETAIL_JOB, element: <DetailJob /> },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
