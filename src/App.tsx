import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import Home from './pages/Home'
import PostListing from './pages/PostListing';
import Post from './pages/Post';
import './styles/styles.scss';
// import rootReducer from './reducers/rootReducers';

// const store = createStore(rootReducer)

function App() {
  return (
    // <Provider store={store}>
      <div>
        <Router>
          <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/posts">
              <PostListing />
            </Route>
            <Route path="/post/:id">
              <Post />
            </Route>
          </Switch>
        </Router>
      </div>
    // </Provider>
  );
}

export default App;
