import React, { Component } from "react";
import axios from "axios";
import "./login.css";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }
  redirect = () => {
    console.log("success");
    this.props.history.push("/pageTwo");
  };
  failMessage = () => {
    console.log("failed");
    return 0;
  };
  formValidator = () => {
    let config = {
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    return axios
      .get("http://localhost:3001/user/", config)
      .then(d => d.data)
      .then(d => {
        let response =
          this.state.user === d.username
            ? this.state.password === d.password
              ? "True"
              : "password"
            : "username";
        response === "True" ? this.redirect() : this.failMessage();
      });
  };
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">Login</h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <input
                  placeholder="Username"
                  value={this.state.user}
                  onChange={e =>
                    this.setState({
                      user: e.target.value
                    })
                  }
                />
              </div>
              <div className="field">
                <input
                  placeholder="Password"
                  value={this.state.password}
                  type="password"
                  onChange={e =>
                    this.setState({
                      password: e.target.value
                    })
                  }
                />
              </div>
              <div
                onClick={() => this.formValidator()}
                className="ui fluid large teal submit button"
              >
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
