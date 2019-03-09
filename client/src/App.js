import React, { Component } from "react";
import Home from "./components/Home/Home";
import "./App.css";

// Redux

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import devToolsEnhancer from "remote-redux-devtools";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

class App extends Component {
  render() {
    return (
      <Provider
        store={createStore(
          reducers,
          {},
          compose(
            applyMiddleware(ReduxThunk),
            devToolsEnhancer()
          )
        )}
      >
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
