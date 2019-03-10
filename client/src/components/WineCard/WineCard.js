import React, { Component } from "react";
import { WineCardStyle } from "./WineCardStyle";
import { FaRegClock, FaWineGlassAlt } from "react-icons/fa";
const moment = require("moment");

const WineCard = props => {
  console.log(props);
  return (
    <WineCardStyle>
      <div className="imageContainer">
        <img className="image" src={props.item.image} />
      </div>
      <div className="infoSection">
        <div className="wineBlock">
          <p>
            <FaRegClock /> Pub Date
          </p>
          <h2 className="date">
            {moment(props.item.pubDate).format("MMM Do YY")}
          </h2>
        </div>
        <div className="wineBlock">
          <p>
            <FaWineGlassAlt /> Wine Brand
          </p>
          <h2 className="title">{props.item.title}</h2>
        </div>
      </div>
      <div className="priceContainer">
        <div className="subPriceContainer">
          <p className="price">{props.item.price}.00 $</p>
        </div>
        <div className="subPriceContainer">
          <button className="addButton">ADD</button>
        </div>
      </div>
    </WineCardStyle>
  );
};

export default WineCard;
