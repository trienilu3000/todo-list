import { lazy } from "react";

const DashboardPage = lazy(() => import("../../pages/Dashboard/DashboardPage"));
const VitalTaskPage = lazy(() => import("../../pages/VitalTask/VitaltaskPage"));

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
    name: "Dashboard",
  },
];

const vitalTaskRoutes = [
  {
    path: "/vital-tasks",
    element: <VitalTaskPage />,
    name: "Vital Tasks",
  },
];

export const mainRoutes = [
  {
    path: "/",
    element: <DashboardPage />,
    name: "Dashboard",
  },
  ...dashboardRoutes,
  ...vitalTaskRoutes,
];
