import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoCompassSharp, IoGlobeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
 console.log(profile);
  // get profile
  const getProfile = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.launcherr.co/api/showUserProfile`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      const data = await res.json();
      setProfile(data.userprofile);
     
     console.log(data);
      if (res.ok) {
        setLoading(false);
      } else {
        setLoading(false);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">User Profile</div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-8 col-xl-9">
          <div class="card overflow-hidden radius-10">
            <div class="profile-cover bg-dark position-relative mb-4">
              <div class="user-profile-avatar shadow position-absolute top-50 start-0 translate-middle-x">
                <img src="./images/avatars/06.png" alt="..." />
              </div>
            </div>
            <div class="card-body">
              <div class="mt-5 d-flex align-items-start justify-content-between">
                <div class="">
                  <h3 class="mb-2">{user.user.name}</h3>
                  <p class="mb-1">{profile.user_Address}</p>
                  <p>
                    {profile.user_City +
                      ", " +
                      profile.user_State +
                      ", " +
                      profile.user_Country}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-2">About Me</h4>
              <p class="">{profile.user_AboutMe}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-xl-3">
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="mb-3">Location</h5>
              <p class="mb-0">
                <IoCompassSharp />
                Kalkio Network
              </p>
            </div>
          </div>

          <div class="card radius-10">
            <div class="card-body">
              <h5 class="mb-3">Connect</h5>
              <p class=" ">
                <IoGlobeOutline className="me-2" />
                www.example.com
              </p>
              <p class=" ">
                <FaFacebook className="me-2" />
                Facebook
              </p>
              <p class=" ">
                <FaXTwitter className="me-2" />X
              </p>
              <p class="mb-0 ">
                <FaLinkedin className="me-2" />
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
