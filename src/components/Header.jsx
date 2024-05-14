import React from "react";
import avatar from "../assets/avatar.f64e6283.png";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Account from "./Account";

function Header() {
  return (
    <>
      <div className="container w-full flex items-center gap-4 top-4 inset-x-0 absolute lg:invisible visible">
        <SearchBar />
        <Account />
      </div>
      <nav className="fixed lg:relative bottom-2 inset-x-4 z-10">
        <div className="container py-4 md:py-8 px-5 bg-slate-700/60 border-2 lg:border-none border-slate-700 backdrop-blur-sm lg:bg-transparent md:flex rounded-xl">
          <div className="w-full lg:flex items-center gap-20">
            <h1 className="text-white font-bold text-2xl hidden lg:block">
              <Link to="/">
                MOVIE<span className="text-primary-800">RAA</span>
              </Link>
            </h1>
            <div className="flex items-center gap-8 justify-evenly">
              <NavLink
                aria-current="page"
                to="/"
                className="activeNav text-white hover:text-purple-500 transition-all duration-300"
              >
                <span className="hidden lg:block">Home</span>
                <i className="lg:hidden text-xl bi bi-house"></i>
              </NavLink>
              <NavLink
                to="#Movies"
                className="text-white hover:text-purple-500 transition-all duration-300"
              >
                <span className="hidden lg:block">Movies</span>
                <i className="lg:hidden text-xl bi bi-play-btn"></i>
              </NavLink>
              <NavLink
                to="#"
                className="text-white hover:text-purple-500 transition-all duration-300"
              >
                <span className="hidden lg:block">Trending</span>
                <i className="lg:hidden text-xl bi bi-fire"></i>
              </NavLink>
              <NavLink
                to="#"
                className="text-white hover:text-purple-500 transition-all duration-300"
              >
                <span className="hidden lg:block">TV Show</span>
                <i className="lg:hidden text-xl bi bi-cast"></i>
              </NavLink>
            </div>
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <SearchBar />
              <Account />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
