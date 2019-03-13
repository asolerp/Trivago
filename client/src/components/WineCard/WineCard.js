import React, { Component } from "react";
import { WineCardStyle } from "./WineCardStyle";
import { FaRegClock, FaWineGlassAlt } from "react-icons/fa";
import { addWineToCart, openMessage, closeMessage } from "../../actions";
import { connect } from "react-redux";
const moment = require("moment");

class WineCart extends Component {
  _addWineStore = () => {
    if (
      moment(this.props.item.pubDate).format("MMM Do YY") ===
      moment(new Date()).format("MMM Do YY")
    ) {
      this.props.addWineToCart(this.props.item);
    } else {
      this.props.openMessage()
    }
  };

  render() {
    return (
      <WineCardStyle>
        <div className="imageContainer">
          <img className="image" src={this.props.item.image} />
        </div>
        <div className="infoSection">
          <div className="wineBlock">
            <p>
              <FaRegClock /> Pub Date
            </p>
            <h2 className="date">
              {moment(this.props.item.pubDate).format("MMM Do YY")}
            </h2>
          </div>
          <div className="wineBlock">
            <p>
              <FaWineGlassAlt /> Wine Brand
            </p>
            <h2 className="title">{this.props.item.title}</h2>
          </div>
        </div>
        <div className="priceContainer">
          <div className="subPriceContainer">
            <p className="price">{this.props.item.price}.00 $</p>
          </div>
          <div className="subPriceContainer">
            <button className="addButton" onClick={this._addWineStore}>
              ADD
            </button>
          </div>
        </div>
      </WineCardStyle>
    );
  }
}

export default connect(
  null,
  { addWineToCart,openMessage, closeMessage }
)(WineCart);
