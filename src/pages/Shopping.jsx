import { Rate } from "antd";
import { CiStar } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";

const Shopping = () => {
  return (
    <>
      <div class="row">
        <div class="col col-lg-12 mx-auto">
          <h6 class="mb-0 text-uppercase">History</h6>
          <hr />
          <div class="card ">
            <div class="card-body">
              <ul class="nav nav-tabs nav-primary">
                <li class="nav-item active " role="presentation">
                  <a
                    class="nav-link active "
                    data-bs-toggle="tab"
                    href="#primaryprofile"
                    role="tab"
                    aria-selected="true"
                  >
                    <div class="d-flex align-items-center">
                      <div class="tab-icon">
                        <IoPricetagOutline className="me-1" />
                      </div>
                      <div class="tab-title">Shoppings</div>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="tab-content py-3"></div>
              <div
                class="tab-pane fade show active"
                id="primaryprofile"
                role="tabpanel"
              >
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
                  <div class="col">
                    <div class="card radius-10">
                      <div class="card-body">
                        <img
                          src="./images/cards/07.png"
                          class="img-fluid mb-3"
                          alt="..."
                        />
                        <div class="text-center">
                          <p class="fs-6 mb-0">Titen Watch</p>
                          <h4 class="my-2">$60</h4>
                          <div class="ratings fs-6">
                            <Rate value={5} />
                          </div>
                          <div class="d-grid">
                            <a
                              href="javascript:;"
                              class="btn btn-info radius-10 mt-3"
                            >
                              <IoIosCart className="me-1" /> Buy Again{" "}
                            </a>
                          </div>
                        </div>
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
    </>
  );
};

export default Shopping;
