import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Movies from "./components/Movies";
import { Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact
            path="/now_playing"
            render={(routeProps) => <Movies {...routeProps} />}
          />
          <Route
            exact path="/upcoming"
            render={(routeProps) => <Movies {...routeProps} />}
          />
          <Route
            exact path="/top_rated"
            render={(routeProps) => <Movies {...routeProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
