import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Post from './components/post';
import SinglePost from './components/singlePost';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Post />
        </Route>
        <Route exact path="/:postId">
          <SinglePost />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
