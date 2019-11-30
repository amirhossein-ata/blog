import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div>Home</div>}
          />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
