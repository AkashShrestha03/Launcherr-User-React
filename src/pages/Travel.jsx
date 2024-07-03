import React from "react";

const Travel = () => {
  return (
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
                  href="#primaryhome"
                  role="tab"
                  aria-selected="true"
                >
                  <div class="d-flex align-items-center">
                    <div class="tab-icon">
                      <ion-icon name="walk-outline" class="me-1"></ion-icon>
                    </div>
                    <div class="tab-title">Travel</div>
                  </div>
                </a>
              </li>
            </ul>
            <div class="tab-content py-3">
              <div
                class="tab-pane fade show active"
                id="primaryhome"
                role="tabpanel"
              >
                <div class="row row-cols-1 row-cols-lg-3">
                  <div class="col">
                    <div class="card dash-card">
                      <img
                        src="./images/cards/01.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Goa</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card dash-card">
                      <img
                        src="./images/cards/02.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Nashik, Maharashtra</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card dash-card">
                      <img
                        src="./images/cards/03.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Shimla, Uttrakhand</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-lg-3">
                  <div class="col">
                    <div class="card dash-card">
                      <img
                        src="./images/cards/01.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Goa</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card dash-card">
                      <img
                        src="./images/cards/02.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Nashik, Maharashtra</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="card dash-card">
                      <img
                        src="./images/cards/03.png"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title">Shimla, Uttrakhand</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
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
    </div>
  );
};

export default Travel;
