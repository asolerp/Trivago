import React, { Component } from "react";
import { NavCartStyle } from "./NavCartStyle";
import { FaShoppingCart } from "react-icons/fa";
import { showCartList } from "../../../actions";
import { connect } from "react-redux";

class NavCart extends Component {
  _renderCart() {
    return <span className="itemsCart">{this.props.cart}</span>;
  }

  render() {
    return (
      <NavCartStyle>
        <a
          className="cart"
          onClick={() => {
            this.props.showCartList();
          }}
        >
          <FaShoppingCart />
          {this.props.cart > 0 && this._renderCart()}
        </a>
      </NavCartStyle>
    );
  }
}

const mapStateToProps = state => {
  return { cart: state.wines.cart };
};

export default connect(
  mapStateToProps,
  { showCartList }
)(NavCart);
