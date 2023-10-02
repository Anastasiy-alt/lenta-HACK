import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/coockie";

export const HomePage = () => {
  return <div>{getCookie("auth_token")}</div>;
  // <Navigate to="/login" replace />;
};
