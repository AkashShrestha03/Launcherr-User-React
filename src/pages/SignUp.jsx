import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerSuccessful } from "../store/userSlice";
import { Alert } from "@mui/material";

const SignUp = () => {
  const INITIAL_VALUE = {
    name: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.launcherr.co/api/auth/userRegister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      const res_data = await response.json();
      console.log(response);
      console.log(res_data);
      if (response.ok) {
        navigate("/");
        setLoading(false);
        console.log(response);
        dispatch(registerSuccessful());
      } else {
        setLoading(false);
        setErrorMsg(res_data.email || res_data.password);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="wrapper">
      <div className="">
        <div className="row g-0 m-0">
          <div className="col-xl-6 col-lg-12">
            <div className="login-cover-wrapper">
              <div className="card shadow-none">
                <div className="card-body">
                  <div className="text-center">
                    <h4>Join us today</h4>
                    <p>Enter your required details to register</p>
                  </div>
                  <form className="form-body row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label for="inputName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        placeholder="Enter your name"
                        className="form-control"
                        id="inputName"
                      />
                    </div>
                    <div className="col-12">
                      <label for="inputEmail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        onChange={handleOnChange}
                        placeholder="Email address"
                        className="form-control"
                        id="inputEmail"
                      />
                    </div>
                    <div className="col-12">
                      <label for="inputPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        required
                        name="password"
                        placeholder="password"
                        className="form-control"
                        id="inputPassword"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckChecked"
                        >
                          I agree the Terms and Conditions
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          {loading ? "Loading..." : "Sign Up"}
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12 text-center">
                      <p className="mb-0">
                        Already have an account?{" "}
                        <Link to={"/signin"}>Sign in</Link>
                      </p>
                    </div>
                  </form>
                  {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="position-fixed top-0 h-100 d-xl-block d-none register-cover-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
