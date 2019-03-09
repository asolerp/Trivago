import {
    WINES_LIST
} from './types'

import apiBack from "../api/apiBack";

export const getListWine = () => {
  return async dispatch => {
    const wines =  await apiBack.getAllWines()
    return dispatch({type: WINES_LIST, payload: wines.data})
    // .then(movies => {
    //   return dispatch({ type: MOVIES_LIST, payload: movies.data });
    // })
    // .catch(err => console.log(error.response.data.message))
  }
}

