import React from 'react'
import { IoIosChatbubbles, IoIosGitNetwork, IoIosUmbrella } from 'react-icons/io';
import { IoBagHandle, IoBookSharp, IoCameraSharp, IoFishSharp, IoHeadsetSharp } from 'react-icons/io5';

const Gigs = () => {
  return (
    <>
      <div class="row">
        <div class="col col-lg-12 mx-auto">
          <h6 class="mb-0 text-uppercase">History</h6>
          <hr />
          <div class="card ">
            <div class="card-body">
              <ul class="nav nav-tabs nav-primary" role="tablist">
                <li class="nav-item active" role="presentation">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#primarycontact"
                    role="tab"
                    aria-selected="true"
                  >
                    <div class="d-flex align-items-center">
                      <div class="tab-icon">
                        <IoIosGitNetwork />
                      </div>
                      <div class="tab-title">Gigs</div>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="tab-content py-3">
                <div
                  class="tab-pane fade show active"
                  id="primarycontact"
                  role="tabpanel"
                >
                  <div class="row row-cols-1 row-cols-lg-3">
                    <div class="col">
                      <div class="card dash-card radius-10 bg-success ">
                        <div class="card-body text-white">
                          <div class="service-box bg-white text-success">
                            <IoIosUmbrella />
                          </div>
                          <h5>Best Quality</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card radius-10 dash-card bg-primary">
                        <div class="card-body text-white">
                          <div class="service-box bg-white text-primary">
                            <IoBagHandle />
                          </div>
                          <h5>Awesome Design</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card radius-10 dash-card bg-tiffany ">
                        <div class="card-body text-white">
                          <div class="service-box bg-white text-tiffany">
                            <IoIosChatbubbles />
                          </div>
                          <h5>Great Performance</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row row-cols-1 row-cols-lg-4">
                    <div class="col">
                      <div class="card radius-10 dash-card bg-purple">
                        <div class="card-body text-white">
                          <div class="service-box bg-white text-purple">
                            <IoBookSharp />
                          </div>
                          <h5>Best Services</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card radius-10 dash-card  bg-danger ">
                        <div class="card-body text-white">
                          <div class="service-box bg-white text-danger">
                            <IoCameraSharp />
                          </div>
                          <h5>Organized Content</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card radius-10 dash-card bg-bronze">
                        <div class="card-body text-white">
                          <div class="service-box bg-white text-bronze">
                            <IoFishSharp />
                          </div>
                          <h5>Super Fast</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card radius-10 dash-card  bg-dark">
                        <div class="card-body text-white">
                          <div class="service-box bg-white">
                            <IoHeadsetSharp />
                          </div>
                          <h5>Fast Development</h5>
                          <p class="mb-0">
                            Horses famous for their size and quality are reared
                            in the marshes of Aurich and Stade, in Hildesheim
                            and Hanover; and, for breeding purposes, in the stud
                            farm of Celle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="overlay nav-toggle-icon"></div>
      </div>
    </>
  );
}

export default Gigs
