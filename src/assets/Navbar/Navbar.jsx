import { useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  useEffect(() => {
    document.title = "Index";
  });

  return (
    <>
      <div className="topnav" id="myTopnav">
        <a href="#home">Home</a>
        <a href="#home">Bar 1</a>
        <a href="#home">Bar 2</a>
        <a href="#" className="icon" onClick={() => myFunction()}>
          <i className="fa fa-bars"></i>
        </a>
        <div className="navbar-right">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </div>

      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>

      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>
      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>
      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>
      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>
      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>
      <div className="p1">
        <h2>responsive navbar</h2>
        <p>Resize navbar</p>
      </div>
    </>
  );
}
