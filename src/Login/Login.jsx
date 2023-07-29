import { useEffect } from "react";
import "./Login.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

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
            <i
              className="fa fa-arrow-left"
              style={{
                backgroundColor: "transparent",
              }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="login-flexbox-right">
          {/* <div className="login"></div> */}

          <form onSubmit="/">
            <div className="register-flexbox-form">
              <div className="register-form">
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Username :{" "}
                </label>
                <br />
                <input type="text" placeholder="Masukkan Username Anda"></input>
                <br />
                <label
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Password :{" "}
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Masukkan Password Anda"
                ></input>
                <br />
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    margin: "20px 100px",
                    borderRadius: "10px 10px",
                  }}
                  type="submit"
                >
                  Submit
                </button>
                <div className="login-gmail">
                  <span className="label-signin">
                    Login dengan Opsi lain :{" "}
                  </span>
                  <br />
                  <br />
                  <div className="customBtn">
                    <GoogleOAuthProvider clientId="251913067029-p4ogicgj2da5p3d4l582n0hvj46lgqgb.apps.googleusercontent.com">
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                        }}
                        onError={() => {
                          console.log("Error");
                        }}
                      />
                    </GoogleOAuthProvider>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
