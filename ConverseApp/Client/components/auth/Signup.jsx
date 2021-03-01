import React, { Component } from "react";

import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.props !== prevProps){
    this.validation("name");
    this.validation("email");
    this.validation("password");}

  }

  validation = (field) => {
    switch (field) {
      case "name":
        let fnFormat = /^[a-zA-Z]+$/;
        if (this.state.name.match(fnFormat)) {
          let error = this.state.error;
          error = error.filter((err) => err.type !== "name");

          this.setState({
            error,
          });
        } else {
          let error = this.state.error;
          error.push({
            type: "name",
            message: "Please enter your full name.",
          });
          this.setState({
            error,
          });
        }
        break;

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
          error.push({ type: "email", message: "Invalid Email Format." });
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
          <form>
            <h3>Register</h3>

            <div className="form-group">
              <label> Name</label>
              <input
                name="name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                onBlur={(e) => {
                  this.validation(e.target.name);
                }}
                className={
                  this.state.error.find((err) => err.type === "name")
                    ? "form-control border-danger"
                    : "form-control"
                }
                placeholder="name"
              />
              {this.state.error.find((err) => err.type === "name") ? (
                <small className="text-danger">
                  {
                    this.state.error[
                      this.state.error.findIndex((err) => err.type === "name")
                    ].message
                  }
                </small>
              ) : null}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
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
                onChange={(e) => this.setState({ password: e.target.value }) }
                
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

            <button
              onClick={async (e) => {
                e.preventDefault();
                this.validation("name");
                this.validation("email");
                this.validation("password");
                console.log('clicked')
                
                  try {
                    const res = await fetch("http://localhost:5000/signup", {
                      method: "POST",
                      body: JSON.stringify({
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                      }),
                      headers: { "Content-Type": "application/json" },
                    });
                    const data = await res.json();

                    if (data.errors) {
                      let error = this.state.error;

                      data.errors.name &&
                        error.push({
                          type: "name",
                          message: data.errors.name,
                        });
                      data.errors.password &&
                        error.push({
                          type: "password",
                          message: data.errors.password,
                        });
                      data.errors.email &&
                        error.push({
                          type: "email",
                          message: data.errors.email,
                        });

                      this.setState({
                        error,
                      });
                    }
                  } catch (err) {}
                }
              }
              className="btn btn-dark btn-lg btn-block"
              disabled ={this.state.error.length >0}
            >
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <Link to="/login">log in?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
