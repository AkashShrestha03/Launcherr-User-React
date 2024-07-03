import { BiEdit } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { IoMenu, IoPersonCircleOutline, IoRibbonOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../store/userSlice";


const Header = (props) => {
  const dispatch = useDispatch()
  return (
    <header class="top-header">
      <nav class="navbar navbar-expand gap-3">
        <div class="toggle-icon mobile-toggle"  onClick={
            props.mobileToggle
              ? () => props.mobile(false)
              : props.Toggled
              ? () => props.onToggle(false)
              : () => props.onToggle(true)}>
          <GrMenu />
        </div>

        <div class="top-navbar-right ms-auto">
          <ul class="navbar-nav align-items-center">
            <li class="nav-item dropdown dropdown-user-setting">
              <a
                class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                href="javascript:;"
                data-bs-toggle="dropdown"
              >
                <div class="user-setting">
                  <img
                    src="./images/avatars/06.png"
                    width="54"
                    height="54"
                    class="user-img"
                    alt=""
                  />
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="javascript:;">
                    <div class="d-flex flex-row align-items-center gap-2">
                      <img
                        src="./images/avatars/06.png"
                        alt=""
                        class="rounded-circle"
                        width="54"
                        height="54"
                      />
                      <div class="">
                        <h6 class="mb-0 dropdown-user-name">
                          Jhon Deo{" "}
                          <span>
                            <img
                              style={{ width: "16px" }}
                              src="./images/verified-icon.png"
                              alt=""
                            />
                          </span>
                        </h6>
                        <small class="mb-0 dropdown-user-designation text-secondary">
                          UI Developer
                        </small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <Link to={"/"} class="dropdown-item" href="javascript:;">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <IoPersonCircleOutline />
                      </div>
                      <div class="ms-3">
                        <span>Profile</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={"/editprofile"} class="dropdown-item" href="javascript:;">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <BiEdit />
                      </div>
                      <div class="ms-3">
                        <span>Edit Profile</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={"subscription"} class="dropdown-item" href="javascript:;">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <IoRibbonOutline />
                      </div>
                      <div class="ms-3">
                        <span>My Subscription</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={"/settings"} class="dropdown-item" href="javascript:;">
                    <div class="d-flex align-items-center">
                      <div class="">
                        <MdOutlineSettings />
                      </div>
                      <div class="ms-3">
                        <span>Settings</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" >
                    <div class="d-flex align-items-center">
                      <div class="">
                        <ion-icon name="log-out-outline"></ion-icon>
                      </div>
                      <div class="ms-3">
                        <span>Logout</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header
