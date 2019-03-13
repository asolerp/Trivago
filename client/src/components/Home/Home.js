import React, { Component } from "react";
import { HomeStyleComponent } from "./HomeStyle";
import { connect } from "react-redux";
import { getListWine, addWineToCart, closeMessage } from "../../actions";
import WineCard from "../WineCard/WineCard";
import NavBar from "../NavBar/NavBar";
import CartList from "../CartList/CartList";
import MessageAlert from "../MessageAlert/MessageAlert";

class Home extends Component {
  componentDidMount() {
    this.props.getListWine();
  }

  addWine() {
    console.log("hola");
    this.props.addWineToCart();
  }
  
  _renderWines(wineSelection) {
    return (
      <div style={{ paddingTop: "10%" }}>
        {wineSelection === "todayWines" ? (
          <h1 className="filterTitle">Day Selection</h1>
        ) : (
          <h1 className="filterTitle">Wines</h1>
        )}
        {this.props.wines[0] !== undefined &&
          this.props.wines[0][wineSelection].map((wine, i) => (
            <WineCard item={wine} key={i} addWineCart={this.addWine} />
          ))}
        {this.props.showList && <CartList />}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <HomeStyleComponent>
          {this._renderWines("todayWines")}
          {this._renderWines("restWines")}
        </HomeStyleComponent>
        {this.props.modal && <MessageAlert close={this.props.closeMessage}/>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    wines: state.wines.wines,
    showList: state.wines.showList,
    modal: state.wines.modal
  };
};

export default connect(
  mapStateToProps,
  { getListWine, addWineToCart, closeMessage }
)(Home);
