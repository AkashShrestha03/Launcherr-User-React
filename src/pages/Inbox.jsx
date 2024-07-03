const Inbox = () => {
  return (
    <>
      <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div class="breadcrumb-title pe-3">Inbox</div>

        <form class="ms-auto position-relative">
          <div class="position-absolute top-50 translate-middle-y search-icon px-3">
            <ion-icon name="search-sharp"></ion-icon>
          </div>
          <input class="form-control ps-5" type="text" placeholder="search" />
        </form>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center"></div>
          <div class="table-responsive mt-3">
            <table class="table align-middle">
              <thead class="table-secondary">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="./images/avatars/01.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Thomas Hardy</p>
                      </div>
                    </div>
                  </td>
                  <td>thomas@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Views"
                        aria-label="Views"
                      >
                        <i class="bi bi-chat-square-dots"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Edit"
                        aria-label="Edit"
                      >
                        <i class="bi bi-send"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="./images/avatars/02.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Victoria Hardy</p>
                      </div>
                    </div>
                  </td>
                  <td>victoria@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Views"
                        aria-label="Views"
                      >
                        <i class="bi bi-chat-square-dots"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Edit"
                        aria-label="Edit"
                      >
                        <i class="bi bi-send"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="./images/avatars/03.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Maria Anders</p>
                      </div>
                    </div>
                  </td>
                  <td>Andres@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Views"
                        aria-label="Views"
                      >
                        <i class="bi bi-chat-square-dots"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Edit"
                        aria-label="Edit"
                      >
                        <i class="bi bi-send"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="./images/avatars/04.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Maria Anders</p>
                      </div>
                    </div>
                  </td>
                  <td>Maria@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Views"
                        aria-label="Views"
                      >
                        <i class="bi bi-chat-square-dots"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Edit"
                        aria-label="Edit"
                      >
                        <i class="bi bi-send"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="./images/avatars/05.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Martin Loother</p>
                      </div>
                    </div>
                  </td>
                  <td>martin@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Views"
                        aria-label="Views"
                      >
                        <i class="bi bi-chat-square-dots"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Edit"
                        aria-label="Edit"
                      >
                        <i class="bi bi-send"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <div class="d-flex align-items-center gap-3 cursor-pointer">
                      <img
                        src="./images/avatars/06.png"
                        class="rounded-circle"
                        width="44"
                        height="44"
                        alt=""
                      />
                      <div class="">
                        <p class="mb-0">Martin Loother</p>
                      </div>
                    </div>
                  </td>
                  <td>email@gmail.com</td>
                  <td>9876543210</td>

                  <td>
                    <div class="table-actions d-flex align-items-center gap-3 fs-6">
                      <a
                        href="javascript:;"
                        class="text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Chat"
                        aria-label="Chat"
                      >
                        <i class="bi bi-chat-square-dots"></i>
                      </a>
                      <a
                        href="javascript:;"
                        class="text-warning"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title=""
                        data-bs-original-title="Edit"
                        aria-label="Edit"
                      >
                        <i class="bi bi-send"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
