import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [success, setSuccess] = useState(false);
  const { user } = useSelector((state) => state.user);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.trim() });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.launcherr.co/api/userPasswordUpdate`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
          body: JSON.stringify(formValues),
        }
      );

      const response = await res.json();

      console.log(response);
      if (res.ok) {
        setLoading(false);
        setSuccess(true)
      } else {
        setErrorMsg(response.error);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-7 mx-auto">
          <div class="reset-passowrd  ">
            <div class="card radius-10 w-100 mt-2">
              <div class="card-body p-4">
                <div class="text-center">
                  <h4>Change Password</h4>
                </div>
                <form class="form-body row g-3" onSubmit={handleSubmit}>
                  <div class="col-12">
                    <label for="oldpassword" class="form-label">
                      Old Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="oldpassword"
                      onChange={handleChange}
                      name="old_password"
                      placeholder="Old password"
                    />
                  </div>
                  <div class="col-12">
                    <label for="newpassword" class="form-label">
                      New Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="new_password"
                      id="newpassword"
                      onChange={handleChange}
                      placeholder="New Password"
                    />
                  </div>
                  <div class="col-12">
                    <label for="confirmpassword" class="form-label">
                      Confirm New Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="confirm_new_password"
                      onChange={handleChange}
                      id="confirmpassword"
                      placeholder="Confirm New Password"
                    />
                  </div>
                  <div class="col-12 col-lg-12">
                    <div class="d-grid">
                      <button type="submit" class="btn btn-primary">
                        {loading ? "Loading..." : "Update"}
                      </button>
                    </div>
                  </div>
                </form>
                {(success && (
                  <Alert className="mt-3">Password Updated Succcessfully</Alert>
                )) ||
                  (errorMsg && (
                    <Alert className="mt-3" severity="error">
                      {errorMsg}
                    </Alert>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
