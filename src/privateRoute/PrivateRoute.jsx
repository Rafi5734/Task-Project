import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  var data = JSON.parse(localStorage.getItem("authToken"));
  if (!data) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
