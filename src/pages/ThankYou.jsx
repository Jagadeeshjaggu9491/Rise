import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success mb-3">Thank You! 🎉</h1>
      <p>Your form has been submitted successfully.</p>

      <Link to="/" className="btn btn-outline-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}
