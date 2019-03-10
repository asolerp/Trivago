import {
    WINES_LIST
} from './types'

import apiBack from "../api/apiBack";
import wineFilters from '../utils/wineFilters'

export const getListWine = () => {
  return async dispatch => {
    const wines =  await apiBack.getAllWines()
    const winesDay = wineFilters.getWineDay(wines.data)
    return dispatch({type: WINES_LIST, payload: winesDay})
    // .then(movies => {
    //   return dispatch({ type: MOVIES_LIST, payload: movies.data });
    // })
    // .catch(err => console.log(error.response.data.message))
  }
}

