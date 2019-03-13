import React, { Component } from "react";
import { CartElementStyle } from "./CartElementStyle";

const CartElement = props => {
  return (
    <CartElementStyle>
      <img src={props.item.image}></img>
      <h1>{props.item.title}</h1>
      <p>{props.item.price}.00$</p>
    </CartElementStyle>
  );
};

export default CartElement;