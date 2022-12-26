import React, { Component } from "react";
import { connect } from 'react-redux';
import searchMovie from "../actions/movieActions";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
    const { dispatch } = this.props;
    console.log(dispatch);
    dispatch(searchMovie(this.state.movie));
  }

  render() {
    return (
      <form className="Search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="movie"
          value={this.state.movie}
          onChange={this.handleChange}
          placeholder="Search Movie..."
        />
      </form>
    );
  }
}

export default connect()(Search);
