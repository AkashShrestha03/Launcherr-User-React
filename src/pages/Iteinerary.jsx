

const Itinerary = () => {
  return (
    <>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Itinerary</div>
      </div>

      <div class="card radius-10">
        <div class="card-header bg-light">
          <h5 class="mb-0">Manali</h5>
        </div>
        <div class="card-body bg-light">
          <div class="accordion d-flex flex-column gap-4" id="accordionOne">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
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
      </div>

      <div class="card radius-10">
        <div class="card-header bg-light">
          <h5 class="mb-0">Mumbai</h5>
        </div>
        <div class="card-body bg-light">
          <div class="accordion d-flex flex-column gap-4" id="accordionMumbai">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseMumbai-1"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Day 1
                </button>
              </h2>
              <div
                id="collapseMumbai-1"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionMumbai"
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
                  data-bs-target="#collapseMumbai-2"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Day 2
                </button>
              </h2>
              <div
                id="collapseMumbai-2"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionMumbai"
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
                  data-bs-target="#collapseMumbai-3"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Day 3
                </button>
              </h2>
              <div
                id="collapseMumbai-3"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionMumbai"
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
      </div>
      <div class="card radius-10">
        <div class="card-header bg-light">
          <h5 class="mb-0">Trip To Goa</h5>
        </div>
        <div class="card-body bg-light">
          <div class="accordion d-flex flex-column gap-4" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Day 1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
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
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Day 2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
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
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Day 3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
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
      </div>
    </>
  );
};

export default Itinerary;
