import React, { useState } from "react";
import "./header.css";
import rasm from '../../assets/Header.svg'
import { useDispatch, useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

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
            <div className="flex items-center gap-3 navbar navbar__collection">
              <button
                onClick={() => dispatch({ type: "LOGOUT", payload: cart })}
                className="border-none outline-none text-[14px] font-[700] text-[#253D4E] "
              >
                LOGOUT
              </button>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#000] lg:text-[#000000] "
                  }
                  to={"/wishlist"}
                >
                  <div className="flex gap-">
                <CiHeart className="text-[24px] " />
                <sup className=" px-2 py-3 rounded-xl text-white bg-lime-500">{wishlist.length}</sup>
                  Wishlist
                  </div>
                </NavLink>

                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#000] lg:text-[#040404] "
                  }
                  to={"/Cart"}
                >
                <div className="flex g-1">
                <IoCartOutline className="text-[24px] " />
                <sup className=" px-2 py-3 rounded-xl text-white bg-lime-500">{cart.length}</sup>
                  Cart
                  </div>
                </NavLink>

                <NavLink   to={"/Admin"}>
                <div className="flex g-1">
                <FaUserCircle className="text-[24px] text-black "  />Account
</div>
                </NavLink>
                
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu text-xl">
          <IoMenu />

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
