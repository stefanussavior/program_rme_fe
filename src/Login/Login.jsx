import { useEffect } from "react";
import "./Login.css";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <div className="login-flexbox-container">
        <div className="login-flexbox-left">
          1
          <a href="/" className="login-back">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </a>
        </div>
        <div className="login-flexbox-right">
          <div className="login"></div>
        </div>
      </div>
    </>
  );
}
