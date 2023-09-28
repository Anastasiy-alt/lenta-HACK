import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <h1>LoginPage</h1>
      <p>
        или Зарегистрируйся <Link to="/register">регистарция</Link>
      </p>
    </>
  );
};
