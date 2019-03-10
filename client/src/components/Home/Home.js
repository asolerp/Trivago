import React, { Component } from "react";
import { HomeStyleComponent } from "./HomeStyle";
import { connect } from "react-redux";
import { getListWine } from "../../actions";
import WineCard from "../WineCard/WineCard";
import NavBar from "../NavBar/NavBar";

class Home extends Component {
  componentDidMount() {
    this.props.getListWine();
  }

  _renderWines(wineSelection) {
    return (
      <div style={{marginBottom: 50}}>
        {wineSelection === "todayWines" ? <h1 className="filterTitle">Day Selection</h1> : <h1 className="filterTitle">Wines</h1>}
        {this.props.wines[0] !== undefined &&
          this.props.wines[0][wineSelection].map((wine, i) => (
            <WineCard item={wine} key={i} />
          ))}
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { wines: state.wines.wines };
};

export default connect(
  mapStateToProps,
  { getListWine }
)(Home);
