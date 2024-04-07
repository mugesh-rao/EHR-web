import React from "react";
import "../App.css"; // Import your custom CSS for styling and animations
import Layouts from "../Layout/Layouts";

function ErrorPage() {
  return (
    <Layouts>
    <div className="error-page">
      <div className="animation">
        <div className="face">
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="mouth"></div>
        </div>
        <div className="exclamation">
          <div className="line"></div>
          <div className="dot"></div>
        </div>
      </div>
      <h1 className="error-title">Oops! Page Not Found</h1>
      <p className="error-message">The page you are looking for does not exist.</p>
    </div>
    </Layouts>
  );
}

export default ErrorPage;
