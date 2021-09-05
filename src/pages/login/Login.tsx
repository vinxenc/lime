import * as React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../../components/button/Submit";

const { useState } = React;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [classSpinner, setClassSpinner] = useState("");
  const [textButton, setTextButton] = useState("Log In");
  const history = useHistory();

  const handleSubmit = () => {
    setClassSpinner("spinner-border spinner-border-sm");
    setTextButton("");
    if (!username || !password) {
      setTimeout(() => {
        alert("Please input your username and password");
      }, 2000);
    } else {
      history.push("/");
    }
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/undraw_remotely_2j6y.svg"
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign In</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>

                <form action="#" onSubmit={handleSubmit}>
                  <div className="form-group first last field--not-empty">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </div>

                  <div className="form-group last first mb-4 field--not-empty">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <span className="mr-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>

                  <SubmitButton
                    classButton="btn btn-block btn-primary"
                    classSpinner={classSpinner}
                    text={textButton}
                    onClick={handleSubmit}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
