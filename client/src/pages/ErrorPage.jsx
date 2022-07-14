import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red", fontSize: "8rem" }}>
        Some error has occurred!
      </h1>
      <Link to="/" className="error">
        to Main page
      </Link>
    </div>
  );
}

export default ErrorPage;
