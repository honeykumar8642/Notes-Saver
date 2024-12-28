import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center gap-5  text-2xl bg-black  h-16">
      <h1 className="flex text-pink-600 font-semibold "><NavLink  to={"/"}>Note-Saver</NavLink></h1>
      <div className="flex gap-8">
      <NavLink className={"px-5 py-1 rounded-lg bg-gradient-to-t from-pink-600 to-green-600 "} to={"/"}>Home</NavLink>
      <NavLink className={"px-5 py-1 rounded-lg bg-gradient-to-t from-pink-600 to-green-600 "} to={"/pastes"}>Notes</NavLink>
      
      </div>
      <h3 className="text-sm text-green-600 font-normal">© by Honey. All rights reserved.
      </h3>
    </div>
  );
};

export default Navbar;
