import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      {/* <Route path="/" element={<SignUpPage />} /> */}

      {/* ---- PROTECTED ROUTES ---- */}
      <Route path="" element={<PrivateRoute />}>
        {/* <Route path="/" index element={<HomePage />} /> */}
      </Route>
    </Route>
  )
);
