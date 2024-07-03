import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/itinerary.css"


const Itinerary2 = () => {
  return (
    <>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Itinerary</div>
      </div>
      <div className="slider">
        {" "}
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="shadow rounded destination-slider-item d-flex align-items-center justify-content-center">
              Goa
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow rounded destination-slider-item d-flex align-items-center justify-content-center">
              Shimla
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow rounded destination-slider-item d-flex align-items-center justify-content-center">
              Manali
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow rounded destination-slider-item d-flex align-items-center justify-content-center">
              Bangalore
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow rounded destination-slider-item d-flex align-items-center justify-content-center">
              Mumbai
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow rounded destination-slider-item d-flex align-items-center justify-content-center">
              Sikkim
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div
          class="accordion d-flex flex-column gap-5 mt-5 px-5 mx-5  "
          id="accordionOne"
        >
          <div class="accordion-item">
            <h2 class="accordion-header " id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne-1"
                aria-expanded="true"
                aria-controls="collapseOne-1"
              >
                Day 1
              </button>
            </h2>
            <div
              id="collapseOne-1"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionOne"
            >
              <div class="accordion-body">
                <ul>
                  <li>Party at Beach Club</li>
                  <li>Streat Tours</li>
                  <li>Supermarket & Mall Tours</li>
                  <li>Resourt Stay</li>
                  <li>Beach Volley</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo-2"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Day 2
              </button>
            </h2>
            <div
              id="collapseTwo-2"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionOne"
            >
              <div class="accordion-body">
                <ul>
                  <li>Party at Beach Club</li>
                  <li>Streat Tours</li>
                  <li>Supermarket & Mall Tours</li>
                  <li>Resourt Stay</li>
                  <li>Beach Volley</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree-3"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Day 3
              </button>
            </h2>
            <div
              id="collapseThree-3"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionOne"
            >
              <div class="accordion-body">
                <ul>
                  <li>Party at Beach Club</li>
                  <li>Streat Tours</li>
                  <li>Supermarket & Mall Tours</li>
                  <li>Resourt Stay</li>
                  <li>Beach Volley</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itinerary2;
