import React from "react";
import { BsMinecart } from "react-icons/bs";
import { navbar_links, app_logo } from "../utils/constant";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <nav className="flex justify-between bg-[#5a52a5] items-center px-[100px] max-md:px-[20px] py-2 min-h-[10vh]">
        <div className="logo">
          <Link to={"/"}>
            <img src={app_logo} alt="app-logo" />
          </Link>
        </div>
        <ul className="flex space-x-6 items-center flex-auto justify-end max-md:hidden">
          {navbar_links.map((links) => {
            return (
              <Link to={`/${links.path}`}>
                <li
                  className="cursor-pointer font-semibold text-white "
                  key={links.id}
                >
                  {links.navLinks_name}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="flex ml-10 items-center space-x-4">
          <Link to={"/cart"}>
            <h1>{cartItems.length}</h1>
            <BsMinecart className="text-xl text-white" />
          </Link>
          <FaBars className="text-xl hidden max-md:block text-white cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Header;
