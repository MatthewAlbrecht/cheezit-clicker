import React, { PureComponent, createContext, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Game from '../Game'


// Import context store
import store from '../../context/store'
import actions from '../../context/actions'

// Initialize a context
const Context = createContext()
const { Provider, Consumer } = Context


// eslint-disable-next-line react/prefer-stateless-function
class App extends PureComponent {
  constructor() {
    super();
    this.state = store
  }

  render() {
    // Action App.js
    for(let f in actions) {
      if(typeof actions[f] === "function"){
        actions[f] = actions[f].bind(this);
      }
    }

    return (
      <Provider value={{
        state: this.state,
        actions
      }}>
        <Router>
          <Fragment>
            <Route path="/" render={() => <Game Consumer={Consumer} />} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
