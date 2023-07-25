import { useEffect } from "react";
import "./Register.css";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });

  return (
    <>
      <a href="/">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </a>
      <form onSubmit="/">
        <div className="register-flexbox-form">
          <div className="register-form">
            <label>Username : </label>
            <br />
            <input type="text" placeholder="Masukkan Username Anda"></input>
            <br />
            <label>Password : </label>
            <br />
            <input type="password" placeholder="Masukkan Password Anda"></input>
            <br />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
