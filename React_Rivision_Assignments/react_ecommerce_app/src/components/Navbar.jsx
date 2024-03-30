import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    linkHover:
      "relative py-2 after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer",
  };
  return (
    <nav className=" w-full flex justify-around h-14 bg-green-500 items-center font-bold text-xl text-white">
      <NavLink to="/" className={styles.linkHover}>
        Home
      </NavLink>
      <NavLink to="/login" className={styles.linkHover}>
        Login
      </NavLink>
      <NavLink to="/products" className={styles.linkHover}>
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
