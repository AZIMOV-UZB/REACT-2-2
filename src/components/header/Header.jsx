import React, { useState } from "react";
import "./header.css";
import rasm from '../../assets/Header.svg'
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container header mx-auto px-5 ">
        <div className=" flex items-center     gap-[69px] justify-between mt-5">
          <Link to={"/"}>
            <img
              className="w-[130px] h-[50px] object-contain "
              src={rasm}
              alt=""
            />
          </Link>

          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-2 navbar navbar__collection">
              <button
                onClick={() => dispatch({ type: "LOGOUT", payload: cart })}
                className="border-none outline-none text-[14px] font-[700] text-[#253D4E] "
              >
                LOGOUT
              </button>
                <CiHeart className="text-[24px] " />
                <sup className=" px-2 py-3 rounded-xl text-white bg-lime-500">{wishlist.length}</sup>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/wishlist"}
                >
                  Wishlist
                </NavLink>
                <IoCartOutline className="text-[24px] " />
                <sup className=" px-2 py-3 rounded-xl text-white bg-lime-500">{cart.length}</sup>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Cart"}
                >
                  Cart
                </NavLink>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
