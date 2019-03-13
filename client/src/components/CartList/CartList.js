import React, { Component } from "react";
import { CartListStyle } from "./CartListStyle";
import { connect } from "react-redux";
import CartElement from "./CartElement/CartElement";

class CartList extends Component {
  
  _getTotalCart() {
    return this.props.cartList.reduce((accum, wine) => {
      return (accum = accum + wine.price);
    }, 0);
  }

  render() {
    console.log(this.props.cartList);
    return (
      <CartListStyle>
        {this.props.cartList.length !== 0 ? (
          this.props.cartList.map((wine, i) => <CartElement item={wine} key={i} />)
        ) : (
          <h1>Empty Cart</h1>
        )}
        <p className="totalPrice">Total: {this._getTotalCart()}.00$</p>
      </CartListStyle>
    );
  }
}

const mapStateToProps = state => {
  return { cartList: state.wines.selection };
};

export default connect(mapStateToProps)(CartList);
