import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; 2024 PrintEase. All Rights Reserved |{" "}
          <Link to="/terms-and-conditions">Terms & Conditions</Link> |{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/refunds-cancellation">Refunds & Cancellation</Link> |{" "}
          <Link to="/shipping-policy">Shipping Policy </Link>
        </p>
      </div>
    </div>
  );
};
