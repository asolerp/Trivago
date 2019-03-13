import React, { Component } from "react";
import { NavBarStyle } from "./NavBarStyle";
import NavCart from "./NavCart/NavCart";

const NavBar = props => {
  return (
    <NavBarStyle>
      <h1>Wine RSS</h1>
      <NavCart />
    </NavBarStyle>
  );
};

export default NavBar;
