import { Link, NavLink } from "react-router-dom";

import techGalaxy from "../../assets/images/header/TECH GALAXY.png";
import TG from "../../assets/images/header/TG.ico";
import magnifyingGlass from "../../assets/images/header/magnifying-glass.svg";
import cancel from "../../assets/images/header/cancel.svg";
import homePage from "../../assets/images/header/homepage.svg";
import smartPhone from "../../assets/images/header/smartphone.svg";
import laptop from "../../assets/images/header/laptop.svg";
import tablet from "../../assets/images/header/tablet.svg";
import promotion from "../../assets/images/header/promotion.svg";
import contact from "../../assets/images/header/contact.svg";
import aboutUs from "../../assets/images/header/about-us.svg";
import DefaultAvatar from '../../assets/images/contingency-images/default-avatar.png'
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import { useContext, useState } from "react";
import Context from "context/index";
import { logout } from "features/Users/user.slice"
import { useDispatch, useSelector } from "react-redux";

function Header() {
  // const { auth, dispatchAuth, cart } = useContext(Context)
  const auth = useSelector(state=>state.userList.auth)
  const dispatch = useDispatch()
    
  // const renderedCart = cart.filter(item => item.userId == userId)

  const handleLogout = () => {
    localStorage.setItem('auth', null)
    dispatch(logout())
  }

  return (
    <header>
      <div className="first-header-row">
        <span id="sidebar-open-btn">
          <i className="fa-solid fa-bars"></i>
        </span>

        <div className="container">
          <Link to="/" className="logo-img">
            <img src={techGalaxy} alt="tech-galaxy" />
          </Link>

          <NavLink to="/" className="mobile-logo-img">
            <img src={TG} alt="tech-galaxy" />
          </NavLink>

          <div className="search-input">
            <input type="text" placeholder="Tìm kiếm" />
            <div className="glass-img">
              <img
                src={magnifyingGlass}
                alt="magnify-glass"
                className="magnify-glass filter-gray"
              />
              <img
                src={cancel}
                alt="cancel"
                className="cancel-search-icon filter-gray"
              />
            </div>
            <div id="search-result"></div>
          </div>

          {!auth && (<div className="login-logout">
            <Link className="login-btn" to="/login">
              Đăng nhập
            </Link>
            <p>|</p>
            <Link className="register-btn" to="/register">
              Đăng kí
            </Link>
          </div>)}

          {auth && (
            <div className='credential-container'>
              <div className="avatar-image">
                <img src={DefaultAvatar} alt="ava-default" />
              </div>
              <div className="arrow-up"></div>
              <ul className="dropdown-container">
                <li>Xin chào <b>{auth.username}</b></li>
                <li data-toggle="modal" data-target="#orderHistory">Lịch sử đặt hàng</li>
                <li className="logout-btn" onClick={handleLogout}>Đăng xuất</li>
              </ul>
            </div>
          )}

          <Link className="cart-icon" to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-length">{}</span>
          </Link>
        </div>
      </div>

      <div className="second-header-row">
        <div className="container">
          <ul className="main-menu">
            <li className="menu-icon">
              <NavLink to="/" end>
                <div className="icon-box">
                  <img src={homePage} alt="homepage" className="filter-white" />
                </div>
                <p>Trang chủ</p>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/smartphone">
                <div className="icon-box">
                  <img src={smartPhone} alt="phone" className="filter-white" />
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p>Điện thoại</p>
                <ul className="sub-menu">
                  <Link to="smartphone?brands[]=apple">
                    <li className="sub-menu-item">iPhone</li>
                  </Link>
                  <Link to="smartphone?brands[]=samsung">
                    <li className="sub-menu-item">Samsung</li>
                  </Link>
                  <Link to="smartphone?brands[]=xiaomi">
                    <li className="sub-menu-item">Xiaomi</li>
                  </Link>
                  <Link to="smartphone?brands[]=oppo">
                    <li className="sub-menu-item">Oppo</li>
                  </Link>
                </ul>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/smartphone">
                <div className="icon-box">
                  <img src={tablet} alt="phone" className="filter-white" />
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p>máy tính bảng</p>
                <ul className="sub-menu">
                  <Link to="smartphone.html?brand=apple">
                    <li className="sub-menu-item">iPad</li>
                  </Link>
                  <Link to="smartphone.html?brand=samsung">
                    <li className="sub-menu-item">Samsung</li>
                  </Link>
                  <Link to="smartphone.html?brand=xiaomi">
                    <li className="sub-menu-item">Xiaomi</li>
                  </Link>
                  <Link to="smartphone.html?brand=oppo">
                    <li className="sub-menu-item">Oppo</li>
                  </Link>
                </ul>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/smartphone">
                <div className="icon-box">
                  <img src={laptop} alt="phone" className="filter-white" />
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p>laptop</p>
                <ul className="sub-menu">
                  <Link to="smartphone.html?brand=apple">
                    <li className="sub-menu-item">Macbook</li>
                  </Link>
                  <Link to="smartphone.html?brand=samsung">
                    <li className="sub-menu-item">Samsung</li>
                  </Link>
                  <Link to="smartphone.html?brand=xiaomi">
                    <li className="sub-menu-item">Xiaomi</li>
                  </Link>
                  <Link to="smartphone.html?brand=oppo">
                    <li className="sub-menu-item">Oppo</li>
                  </Link>
                </ul>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/promotion">
                <div className="icon-box">
                  <img
                    src={promotion}
                    alt="promotion"
                    className="filter-white"
                  />
                </div>
                <p>khuyến mãi</p>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/about">
                <div className="icon-box">
                  <img src={aboutUs} alt="about-us" className="filter-white" />
                </div>
                <p>về chúng tôi</p>
              </NavLink>
            </li>

            <li className="menu-icon">
              <NavLink to="/contact">
                <div className="icon-box">
                  <img src={contact} alt="contact" className="filter-white" />
                </div>
                <p>liên hệ</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
