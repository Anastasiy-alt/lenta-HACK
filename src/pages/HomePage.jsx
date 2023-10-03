import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/coockie";
import { SelectedStoreCard } from "../components/SelectedStoreCard/SelectedStoreCard";
import { SerchString } from "../components/SerchString/SerchString";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  return (
    <div>
      <SerchString inHeader={true} />
    </div>
  );
  // <Navigate to="/login" replace />;
  // getCookie("auth_token")
};
{
  /* {<SelectedStoreCard />} */
}
