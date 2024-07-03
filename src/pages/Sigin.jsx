import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerComplete, signInSuccessUser } from "../store/userSlice";

const Signin = () => {
  const INITIAL_VALUE = {
    email: "",
    password: "",
  };
  const { registerSuccess } = useSelector((state) => state.user);
  const [formValues, setFormValues] = useState(INITIAL_VALUE);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    dispatch(registerComplete());
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://api.launcherr.co/api/auth/userLogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const response = await res.json();
      
      console.log("admin data", response);
      if (response.access_token) {
        dispatch(signInSuccessUser(response));
        navigate("/");
        setLoading(false);
      } else {
        setErrorMsg(response.error);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div class="wrapper">
      <div class="">
        <div class="row g-0 m-0">
          <div class="col-xl-6 col-lg-12">
            <div class="login-cover-wrapper">
              <div class="card shadow-none">
                <div class="card-body">
                  <div class="text-center">
                    <h4>Sign In</h4>
                    <p>Sign In to your account</p>
                  </div>
                  <form class="form-body row g-3" onSubmit={handleSubmit}>
                    <div class="col-12">
                      <label for="inputEmail" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        class="form-control"
                        id="inputEmail"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputPassword" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckRemember"
                        />
                        <label
                          class="form-check-label"
                          for="flexSwitchCheckRemember"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6 text-end">
                      <a href="authentication-reset-password-cover.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div class="col-12 col-lg-12">
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary">
                          {loading ? "Loading..." : "Sign In"}
                        </button>
                      </div>
                    </div>

                    <div class="col-12 col-lg-12 text-center">
                      <p class="mb-0">
                        Don't have an account?{" "}
                        <Link to={"/signup"}>Sign up</Link>
                      </p>
                    </div>
                  {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
                  {registerSuccess && (
                    <Alert severity="success">
                      SignUp Successful! Please Signin.
                    </Alert>
                  )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12">
            <div class="position-fixed top-0 h-100 d-xl-block d-none login-cover-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
