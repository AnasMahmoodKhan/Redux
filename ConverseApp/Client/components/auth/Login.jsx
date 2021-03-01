import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: [],
  };

  validation = (field) => {
    switch (field) {
      case "email":
        let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email.match(mailformat)) {
          let error = this.state.error;
          error = error.filter((err) => err.type !== "email");

          this.setState({
            error,
          });
        } else {
          let error = this.state.error;
          error.push({ type: "email", message: "Invalid Email" });
          this.setState({
            error,
          });
        }
        break;

      case "password":
        let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (this.state.password.match(passwordFormat)) {
          let error = this.state.error;
          error = error.filter((err) => err.type !== "password");
     
          this.setState({
            error,
          });
        } else {
          let error = this.state.error;
          error.push({
            type: "password",
            message:
              "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.",
          });
          this.setState({
            error,
          });
        }
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="outer">
        <div className="inner">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (this.state.error.length <= 0) {
                console.log(
                  JSON.stringify({
                    type: "SIGNIN",
                    data: {
                      email: this.state.email,
                      password: this.state.password,
                    },
                  })
                );
              }
            }}
          >
            <h3>Log in</h3>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                onBlur={(e) => {
                  this.validation(e.target.type);
                }}
                className={
                  this.state.error.find((err) => err.type === "email")
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="Enter email"
              />
              {this.state.error.find((err) => err.type === "email") ? (
                <small className="text-danger">
                  {
                    this.state.error[
                      this.state.error.findIndex((err) => err.type === "email")
                    ].message
                  }
                </small>
              ) : null}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                onBlur={(e) => {
                  this.validation(e.target.type);
                }}
                className={
                  this.state.error.find((err) => err.type === "password")
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="Enter password"
              />
              {this.state.error.find((err) => err.type === "password") ? (
                <small className="text-danger">
                  {
                    this.state.error[
                      this.state.error.findIndex(
                        (err) => err.type === "password"
                      )
                    ].message
                  }
                </small>
              ) : null}
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
            <p className="forgot-password text-right">
              Create a new <Link to="/signup">account?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
