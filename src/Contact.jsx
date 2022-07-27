import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/services">Services</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            {" "}
            <Link to="/">home</Link>
          </li>
        </ul>
      </header>

      <div>
        <h1>Contact</h1>
      </div>
    </>
  );
}

export default Contact;
