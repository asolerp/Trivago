import {
    WINES_LIST,
    ADD_WINE,
    SHOW_LIST,
    OPEN_MESSAGE,
    CLOSE_MESSAGE
} from './types'

import apiBack from "../api/apiBack";
import wineFilters from '../utils/wineFilters'

export const getListWine = () => {
  return async dispatch => {
    const wines =  await apiBack.getAllWines()
    const winesDay = wineFilters.getWineDay(wines.data)
    return dispatch({type: WINES_LIST, payload: winesDay})
  }
}

export const showCartList = () => {
  return  dispatch => {
    return dispatch({type: SHOW_LIST, payload: null})
  }
}

export const closeMessage = () => {
  return  dispatch => {
    return dispatch({type: CLOSE_MESSAGE, payload: false})
  }
}

export const openMessage = () => {
  return  dispatch => {
    return dispatch({type: OPEN_MESSAGE, payload: true})
  }
}

export const addWineToCart = (item) => {
  return  dispatch => {
    return dispatch({type: ADD_WINE, payload: item})
  }
}

