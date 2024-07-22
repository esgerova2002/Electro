import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/Header.css";

const Header = ({ onLoginClick }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 300);
  };

  return (
    <header className="container">
      <div className="headerTop">
        <div className="logo">
          <img src="./images/Group 427319094.png" alt="Logo"></img>
        </div>
        <div className="allSearch">
          <div className="select-wrapper">
            <select name="all" id="all">
              <option value="all">All</option>
              <option value="noot">Noot</option>
              <option value="tel">Tel</option>
            </select>
            <SlArrowDown className="select-icon" />
          </div>
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
            <button>Search</button>
          </div>
        </div>
        <div className="headtopright">
          <FaRegHeart className="topicon" />
          <div className="cart-icon-wrapper">
            <BsCart2 className="topicon" />
            <div className="cart-count">
              <span>2</span>
            </div>
          </div>
          <button onClick={onLoginClick}>Login</button>
        </div>
      </div>
      <div className="headnav">
        <div className="cat">
          <AiOutlineMenu />
          <select name="cat" id="cat">
            <option value="cat">All Categories</option>
            <option value="noot">Noot</option>
            <option value="tel">Tel</option>
          </select>
          <SlArrowDown />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to="/shop">
                Shop <SlArrowDown />
              </Link>
              {dropdownVisible && (
                <ul className="dropdown">
                  <li>
                    <Link to="/shop/category1">Category 1</Link>
                  </li>
                  <li>
                    <Link to="/shop/category2">Category 2</Link>
                  </li>
                  <li>
                    <Link to="/shop/category3">Category 3</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
