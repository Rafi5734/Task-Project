import { createBrowserRouter } from "react-router-dom";
import Registration from "../components/admin/Registration/Registration";
import Login from "../components/admin/Login/Login";
import Dashboard from "../components/admin/dashboardLayout/Dashboard";
import AllUsers from "../components/admin/allUsers/AllUsers";
import Invoice from "../components/admin/invoices/Invoice";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "/invoice",
        element: (
          <PrivateRoute>
            <Invoice />
          </PrivateRoute>
        ),
      },
    ],
  },
  // {
  //   path: "/user",
  //   element: <AllUsers />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
