import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] right-0 z-50 flex items-center justify-between flex-col md:flex-row px-20 py-5 font-sans bg-secondary">
      <h1 className="text-3xl md:text-4xl">
        <Link to="/" className="text-white no-underline">
          Notes App
        </Link>
      </h1>
      <nav>
        <ul className="flex items-center justify-center gap-2 list-none md:gap-5">
          <li>
            <NavLink
              to="/"
              className="text-base text-white no-underline md:text-xl hover:text-primary hover:underline hover:underline-offset-8"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes/archived"
              className="text-base text-white no-underline md:text-xl hover:text-primary hover:underline hover:underline-offset-8"
            >
              Archived Note
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes/new"
              className="text-base text-white no-underline md:text-xl hover:text-primary hover:underline hover:underline-offset-8"
            >
              New Note
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
