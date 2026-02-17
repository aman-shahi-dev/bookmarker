import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ isAllowed, redirectPath = "/" }) => {
  if (isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
