import MetisMenu from '@metismenu/react'
import "../../node_modules/metismenujs/scss/metismenujs.scss";
import { IoNavigateOutline, IoPersonCircleOutline, IoRibbonOutline } from "react-icons/io5";
import React from 'react'
import { MdOutlineSettings, MdWork } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { LuMailOpen, LuTicket } from 'react-icons/lu';
import { FaPersonWalking } from 'react-icons/fa6';
import { SiShopify } from 'react-icons/si';
import { PiNetworkFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';

const Sidebar = (props) => {
  return (
    <aside
      class="sidebar-wrapper"
      data-simplebar="true"
      onMouseEnter={() => props.onMoveEnter(true)}
      onMouseLeave={() => props.onMoveExit(false)}
    >
      <div class="sidebar-header">
        <div>
          <img
            src="./images/launcher-black-3.jpg"
            class="logo-icon"
            alt="logo icon"
            style={{borderRadius: "50% "}}
          />
        </div>
        <div>
          <h4 class="logo-text">Launcherr</h4>
        </div>
        <div
          class="toggle-icon ms-5"
          onClick={
            props.mobileToggle
              ? () => props.mobile(false)
              : props.Toggled
              ? () => props.onToggle(false)
              : () => props.onToggle(true)
          }
        >
          <GrMenu />
        </div>
      </div>

      <MetisMenu class="metismenu" id="menu">
        <li>
          <Link to={"/"}>
            <div class="parent-icon">
              <IoPersonCircleOutline />
            </div>
            <div class="menu-title">Profile</div>
          </Link>
        </li>
        <li>
          <Link to={"/gigprofile"}>
            <div class="parent-icon">
              <MdWork />
            </div>
            <div class="menu-title">Gig Profile</div>
          </Link>
        </li>
        <li>
          <Link to={"editprofile"}>
            <div class="parent-icon">
              <BiEdit />
            </div>
            <div class="menu-title">Edit Profile</div>
          </Link>
        </li>
        <li>
          <Link to={"/inbox"}>
            <div class="parent-icon">
              <LuMailOpen />
            </div>
            <div class="menu-title">Inbox</div>
          </Link>
        </li>

        <li>
          <Link to={"/subscription"}>
            <div class="parent-icon">
              <IoRibbonOutline />
            </div>
            <div class="menu-title">My Subscription</div>
          </Link>
        </li>

        <li>
          <Link to={"/itinerary"}>
            <div class="parent-icon">
              <IoNavigateOutline />
            </div>
            <div class="menu-title">Itinerary</div>
          </Link>
        </li>
        <li>
          <Link to={"/travel"}>
            <div class="parent-icon">
              <FaPersonWalking />
            </div>
            <div class="menu-title">Travel</div>
          </Link>
        </li>
        <li>
          <Link to={"/shopping"}>
            <div class="parent-icon">
              <SiShopify />
            </div>
            <div class="menu-title">Shopping</div>
          </Link>
        </li>
        <li>
          <Link to={"/gigs"}>
            <div class="parent-icon">
              <PiNetworkFill />
            </div>
            <div class="menu-title">Gigs</div>
          </Link>
        </li>
        <li>
          <Link to={"/settings"}>
            <div class="parent-icon">
              <MdOutlineSettings />
            </div>
            <div class="menu-title">Settings</div>
          </Link>
        </li>
      </MetisMenu>
    </aside>
  );
}

export default Sidebar
