import React from 'react'
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { IoGlobeOutline } from 'react-icons/io5';

const GigProfile = () => {
  return (
    <>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Gig Profile</div>
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
                  <h3 class="mb-2">Jhon Deo</h3>
                  <p class="mb-1">Engineer at BB Agency Industry</p>
                  <p>New York, United States</p>
                  <div class="">
                    <span class="badge rounded-pill bg-primary">
                      UX Research
                    </span>
                    <span class="badge rounded-pill bg-primary">
                      CX Strategy
                    </span>
                    <span class="badge rounded-pill bg-primary">
                      Project Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mb-2">About Me</h4>
              <p class="">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 col-xl-3">
          <div class="card radius-10">
            <div class="card-body">
              <h5 class="mb-3">Location</h5>
              <p class="mb-0">
                <ion-icon name="compass-sharp" class="me-2"></ion-icon>Kalkio
                Network
              </p>
            </div>
          </div>

          <div class="card radius-10">
            <div class="card-body">
              <h5 class="mb-3">Connect</h5>
              <p class="">
                <IoGlobeOutline className="me-2" />
                www.example.com
              </p>
              <p class="">
                <FaFacebook className="me-2" />
                Facebook
              </p>
              <p class="">
                <FaXTwitter className="me-2" />X
              </p>
              <p class="mb-0">
                <FaLinkedin className="me-2" />
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GigProfile
