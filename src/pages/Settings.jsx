import React from 'react'
import UpdatePassword from '../components/UpdatePassword';

const Settings = () => {
  return (
    <>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Settings</div>
      </div>

      <div class="row">
          <div class="col col-lg-12 mx-auto">


            <div class="card" style={{height: "fit-content"}}>
              <div class="card-body" style={{height: "fit-content"}}>
                <ul class="nav nav-tabs nav-primary" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-bs-toggle="tab" href="#primarypassword" role="tab"
                      aria-selected="true">
                      <div class="d-flex align-items-center">
                        <div class="tab-icon"><ion-icon name="location-outline" class="pe-2"></ion-icon>
                        </div>
                        <div class="tab-title">Change Password</div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#primaryfactor" role="tab" aria-selected="false">
                      <div class="d-flex align-items-center">
                        <div class="tab-icon"><ion-icon name="key-outline" class="pe-2"></ion-icon>
                        </div>
                        <div class="tab-title">2 Factor authentication </div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#primarypayment" role="tab" aria-selected="false">
                      <div class="d-flex align-items-center">
                        <div class="tab-icon"><ion-icon name="card-outline" class="pe-2"></ion-icon>
                        </div>
                        <div class="tab-title">Payment Methods</div>
                      </div>
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" data-bs-toggle="tab" href="#primaryTerms" role="tab" aria-selected="false">
                      <div class="d-flex align-items-center">
                        <div class="tab-icon"><ion-icon name="pricetags-outline" class="pe-2"></ion-icon>
                        </div>
                        <div class="tab-title"> Terms Of Service</div>
                      </div>
                    </a>
                  </li>
              



                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active au-reset-password-basic " id="primarypassword" role="tabpanel">
                  <UpdatePassword/>
                  </div>
                  <div class="tab-pane fade " id="primaryfactor" role="tabpanel">
                    <div class="row m-5">
                      <div class="col ">
                        <h4>Turn on 2-Step Verification</h4>
                        <p>Prevent hackers from accessing your account with an additional layer of security. <br/>
                          Unless you’re signing in with a passkey, you’ll be asked to complete the most secure second step available on your
                          account. You can update your second steps and sign-in options any time in your settings.
                        </p>
                        <button class="btn btn-lg btn-primary">Turn on 2-Step Verification</button>
                      </div>
                      <div class="col"><img src="../assets/images/auth.svg" alt=""/></div>
                    </div>
                    
                  </div>
                  <div class="tab-pane fade" id="primarypayment" role="tabpanel">
                    <div class="card">
                      <div class="card-header border-bottom">
                        <h2 class="h5">Choose Payment Method</h2>
                      </div>
                      <div class="card-body">
                        <ul class="nav nav-pills mb-3" role="tablist">
                          <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="pill" href="#credit-card" role="tab"
                              aria-selected="true">
                              <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class='bx bx-credit-card font-18 me-1'></i>
                                </div>
                                <div class="tab-title">Credit Card</div>
                              </div>
                            </a>
                          </li>
                          <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="pill" href="#debit-card" role="tab"
                              aria-selected="false">
                              <div class="d-flex align-items-center">
                                <div class="tab-icon"><i class='bx bxl-paypal font-18 me-1'></i>
                                </div>
                                <div class="tab-title">Debit Card</div>
                              </div>
                            </a>
                          </li>

                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="credit-card" role="tabpanel">

                            <form>
                              <div class="mb-3">
                                <label class="form-label">Card Owner</label>
                                <input type="text" class="form-control" placeholder="Card Owner Name"/>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Card number</label>
                                <div class="input-group payment-img">
                                  <input type="text" class="form-control" placeholder="Credit Card Number"/> <span
                                    class="input-group-text rounded-0"><img src="../assets/images/icons/mastercard.png"
                                      width="35" alt=""/></span>
                                  <span class="input-group-text"><img src="../assets/images/icons/visa.png" width="35"
                                      alt=""/></span>
                                  <span class="input-group-text"><img src="../assets/images/icons/american-express.png"
                                      width="35" alt=""/></span>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12 col-lg-8">
                                  <div class="mb-3">
                                    <label class="form-label">Expiration Date</label>
                                    <div class="input-group">
                                      <input type="text" class="form-control" placeholder="MM"/>
                                      <input type="text" class="form-control" placeholder="YY"/>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                  <div class="mb-3">
                                    <label class="form-label">CVV</label>
                                    <input type="text" class="form-control" placeholder="Three digit CCV number"/>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="d-grid"><a href="javascript:;" class="btn btn-primary btn-ecomm">Save Card
                                      Details</a>
                                  </div>
                                </div>
                              </div>
                            </form>

                          </div>
                        </div>
                        <div class="tab-pane fade" id="debit-card" role="tabpanel">
                          <form>
                            <div class="mb-3">
                              <label class="form-label">Card Owner</label>
                              <input type="text" class="form-control" placeholder="Card Owner Name"/>
                            </div>
                            <div class="mb-3">
                              <label class="form-label">Card number</label>
                              <div class="input-group payment-img">
                                <input type="text" class="form-control" placeholder="Debit Card Number"/> <span
                                  class="input-group-text rounded-0"><img src="./images/icons/mastercard.png"
                                    width="35" alt=""/></span>
                                <span class="input-group-text"><img src="./images/icons/visa.png" width="35"
                                    alt=""/></span>
                                <span class="input-group-text"><img src="./images/icons/american-express.png"
                                    width="35" alt=""/></span>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-12 col-lg-8">
                                <div class="mb-3">
                                  <label class="form-label">Expiration Date</label>
                                  <div class="input-group">
                                    <input type="text" class="form-control" placeholder="MM"/>
                                    <input type="text" class="form-control" placeholder="YY"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 col-lg-4">
                                <div class="mb-3">
                                  <label class="form-label">CVV</label>
                                  <input type="text" class="form-control" placeholder="Three digit CCV number"/>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-12">
                                <div class="d-grid"><a href="javascript:;" class="btn btn-primary btn-ecomm">Save Card
                                    Details</a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade " id="primaryTerms" role="tabpanel">
                    <div class="card">
                      <div class="card-body ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aperiam cupiditate iure
                        beatae, veniam ex. Quia repudiandae veritatis quae optio quos, modi excepturi assumenda
                        laboriosam recusandae, nulla ut ab adipisci!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque. Consectetur molestiae
                        rem quas deleniti velit placeat eos minus ut magni eum. Sint quos iste, expedita praesentium
                        architecto assumenda mollitia!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem unde ex doloremque excepturi!
                        At ut, explicabo hic consequatur perferendis soluta deserunt maiores iste veritatis incidunt
                        autem nemo ipsa vitae illo.
                        <ul>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio neque modi qui.
                          </li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio neque modi qui.
                          </li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio neque modi qui.
                          </li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio neque modi qui.
                          </li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio neque modi qui.
                          </li>
                        </ul>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aperiam cupiditate iure
                        beatae, veniam ex. Quia
                        repudiandae veritatis quae optio quos, modi excepturi assumenda laboriosam recusandae, nulla ut
                        ab adipisci!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque. Consectetur molestiae
                        rem quas deleniti velit
                        placeat eos minus ut magni eum. Sint quos iste, expedita praesentium architecto assumenda
                        mollitia!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem unde ex doloremque excepturi!
                        At ut, explicabo hic
                        consequatur perferendis soluta deserunt maiores iste veritatis incidunt autem nemo ipsa vitae
                        illo.
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade " id="primaryfactor" role="tabpanel">
                    2 factor
                  </div>





                </div>
                
              </div>



           
              <a href="javaScript:;" class="back-to-top"><ion-icon name="arrow-up-outline"></ion-icon></a>
          
              <div class="switcher-body">
                <button class="btn btn-primary btn-switcher shadow-sm" type="button" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><ion-icon
                    name="color-palette-sharp" class="me-0"></ion-icon></button>
                <div class="offcanvas offcanvas-end shadow border-start-0 p-2" data-bs-scroll="true"
                  data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling">
                  <div class="offcanvas-header border-bottom">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Theme Customizer</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                  </div>
                  <div class="offcanvas-body">
                    <h6 class="mb-0">Theme Variation</h6>
                    <hr/>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="LightTheme"
                        value="option1" checked/>
                      <label class="form-check-label" for="LightTheme">Light</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="DarkTheme"
                        value="option2"/>
                      <label class="form-check-label" for="DarkTheme">Dark</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="SemiDark"
                        value="option3"/>
                      <label class="form-check-label" for="SemiDark">Semi Dark</label>
                    </div>

                  </div>
                </div>
              </div>
          


             
              <div class="overlay nav-toggle-icon"></div>
           

            </div>
            </div>
            </div>
    </>
  );
}

export default Settings
