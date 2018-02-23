import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import { Provider } from 'react-redux'
import './App.css';
import store from './store.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
