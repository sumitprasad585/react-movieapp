import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import Movies from "./components/Movies";
import { Switch, Route, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="now_playing" />
          </Route>
          <Route
            key="now-playing-movies"
            exact path="/now_playing"
            render={(routeProps) => <Movies {...routeProps} />}
          />
          <Route
            key="upcoming-movies"
            exact path="/upcoming"
            render={(routeProps) => <Movies {...routeProps} />}
          />
          <Route
            key="popular-movies"
            exact path="/popular"
            render={(routeProps) => <Movies {...routeProps} />}
          />
          <Route
            key="top-rated-movies"
            exact path="/top_rated"
            render={(routeProps) => <Movies {...routeProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
