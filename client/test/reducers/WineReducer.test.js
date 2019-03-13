import reducer from '../../src/reducers/WineReducer'
import * as types from '../../src/actions/types'

describe('Wine Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        wines: "",
        selection: [],
        cart: 0,
        showList: false,
        modal: false
      }
    )
  })
})