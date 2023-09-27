import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <h1>RegisterPage</h1>
      <p>
        или Войди <Link to="/login">регистарция</Link>
      </p>
    </>
  );
};
