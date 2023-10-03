import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/coockie";
import { SelectedStoreCard } from "../components/SelectedStoreCard/SelectedStoreCard";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  return <div>{<SelectedStoreCard />}</div>;
  // <Navigate to="/login" replace />;
  // getCookie("auth_token")
};
