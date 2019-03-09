import React, { Component } from "react";
import { HomeStyleComponent } from "./HomeStyle";
import { connect } from "react-redux";
import { getListWine } from "../../actions";
import  WineCard from "../WineCard/WineCard"

class Home extends Component {
  componentDidMount() {
    this.props.getListWine();
  }

  render() {
    return (
      <HomeStyleComponent>
        {
          this.props.wines[0] !== undefined &&
          this.props.wines[0].map((wine, i) => (
              <WineCard item={wine} key={i}></WineCard>
          ))
        }
      </HomeStyleComponent>
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
