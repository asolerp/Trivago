import React, { Component } from 'react'
import { HomeStyleComponent } from './HomeStyle'
import apiBack from '../../api/apiBack'

export default class Home extends Component {

 componentDidMount() {
    this._getAllWines()
 }

 _getAllWines = async () => {
     return await apiBack.GetWines()
 }

  render() {
    return (
      <HomeStyleComponent>
        <p>Estamos en la Home :)</p>
      </HomeStyleComponent>
    )
  }
}
