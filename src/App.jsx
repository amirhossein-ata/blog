import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Home from './scripts/view/pages/Home/index'
import "./App.scss";
import Post from './scripts/view/pages/Post/index'

class App extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Home />}
          />
          <Route
            exact
            path="/post/:postID"
            component={() => <Post />}
          />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
