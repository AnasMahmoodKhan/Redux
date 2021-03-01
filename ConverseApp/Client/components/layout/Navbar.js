import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            Conversely
          </a>
          <a href="" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
                }}
              >
                Login
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
                }}
                href="/signup"
              >
                SignUp
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
                }}
                href="/logout"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">SignUp</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
