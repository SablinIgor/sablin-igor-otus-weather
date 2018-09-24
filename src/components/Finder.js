import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Finder.css';


class Finder extends Component {

  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.weatherGetData(this.state.value);
  }

    render() {
      return <div className="Finder">
        <p>City search</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type={"test"}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Input city name"
          />
          <input type="submit" value="Find"/>
        </form>
      </div>;
    }
}

Finder.propTypes = {
  weatherGetData: PropTypes.func.isRequired
};

export default Finder;
