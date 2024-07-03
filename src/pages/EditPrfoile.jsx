import { Button, styled } from "@mui/material";
import { useState } from "react";
import { IoHomeOutline, IoImageSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const EditPrfoile = () => {

   const { user } = useSelector((state) => state.user);
   const [formValues, setFormValues] = useState({});
   const [errorMsg, setErrorMsg] = useState(null);
   const [loading, setLoading] = useState(false);
   const [phone, setPhone] = useState(null);
   
  

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormValues({ ...formValues, user_Number: parseInt(phone), [name]: value.trim() });
     console.log(formValues);
   };

   const handleChangeNumber =(e)=>{
    setPhone(e.target.value)
   }

   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     try {
       const res = await fetch(`https://api.launcherr.co/api/addUserProfile`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${user.access_token}`,
         },
         body: JSON.stringify(formValues),
       });

       const response = await res.json();

       console.log(response);
       if (res.ok) {
         setLoading(false);
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
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Pages</div>
        <div class="ps-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-0 align-items-center">
              <li class="breadcrumb-item">
                <a href="javascript:;">
                  <IoHomeOutline />
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Edit Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card radius-10">
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <h5 class="mb-3">Edit Profile</h5>
                <div class="mb-4 d-flex flex-column gap-3 align-items-center justify-content-center">
                  <div class="user-change-photo shadow">
                    <img src="./images/avatars/06.png" alt="..." />
                  </div>
                </div>
                <h5 class="mb-0 mt-4">User Information</h5>
                <hr />
                <div class="row g-3">
                  <div class="col-6">
                    <label class="form-label">Email address</label>
                    <input
                      type="text"
                      readOnly
                      onChange={handleChange}
                      name="email"
                      class="form-control"
                      value="xyz@example.com"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      name="user_Name"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <h5 class="mb-0 mt-4">Contact Information</h5>
                <hr />
                <div class="row g-3">
                  <div class="col-6">
                    <label class="form-label">Phone Number</label>
                    <input
                      type="number"
                      onChange={handleChangeNumber}
                      class="form-control"
                      name="user_Number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Address</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      class="form-control"
                      name="user_Address"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">City</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange}
                      name="user_City"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">State</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange}
                      name="user_State"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange}
                      name="user_Country"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Pin Code</label>
                    <input
                      type="number"
                      class="form-control"
                      onChange={handleChange}
                      name="user_PinCode"
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label">About Me</label>
                    <textarea
                      class="form-control"
                      rows="4"
                      cols="4"
                      onChange={handleChange}
                      name="user_AboutMe"
                      placeholder="Describe yourself..."
                    ></textarea>
                  </div>
                </div>
                <div class="text-start mt-3">
                  <button type="submit" class="btn btn-primary px-4">
                    {loading ? "Loading..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPrfoile;
