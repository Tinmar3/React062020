import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home'
import PostListing from './Pages/PostListing';
import Post from './Pages/Post';

function App() {
  return (
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
  );
}

export default App;
