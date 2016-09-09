/* eslint react/no-set-state: 0 */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import Butter from '../../api/Butter';


export default class Header extends Component {

  static propTypes = {
    setActiveMode: PropTypes.func.isRequired, activeMode: PropTypes.string.isRequired
  };

  constructor(props: Object) {
    super(props);

    this.butter = new Butter();

    this.state = {
      searchQuery: ''
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.setSearchState = this.setSearchState.bind(this);
  }

  /**
   * Set the mode of the movies to be 'search'
   */
  setSearchState(searchQuery: string) {
    this.props.setActiveMode('search', { searchQuery });
  }

  handleSearchChange(event: Object) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleKeyPress(e: Object) {
    if (e.key === 'Enter') {
      browserHistory.push('/search');
      this.props.setActiveMode('search', {
        searchQuery: this.state.searchQuery
      });
    }
  }

  render() {
    const { activeMode, setActiveMode } = this.props;
    const { searchQuery } = this.state;

    return (
      <div className="col-xs-12">
        <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
          <a
            className="navbar-brand"
            onClick={() => setActiveMode('movies')}
          >
            <h4>Popcorn Time</h4>
          </a>
          <ul className="nav navbar-nav">
            <li
              className={classNames('nav-item', {
                active: activeMode === 'movies'
              })}
            >
              <a
                className="nav-link"
                onClick={() => setActiveMode('movies')}
              >
                Movies <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className={classNames('nav-item', {
                active: activeMode === 'shows'
              })}
            >
              <a
                className="nav-link"
                onClick={() => setActiveMode('shows')}
              >
                TV Shows
              </a>
            </li>
          </ul>
          <div className="form-inline pull-xs-right">
            <input
              className="form-control"
              value={searchQuery}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleSearchChange}
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-success-outline"
              onClick={() => this.setSearchState(searchQuery)}
              type="button"
            >
              Search
            </button>
          </div>
        </nav>
        {/* // HACK: Add spacing from top of page */}
        <nav className="navbar hidden navbar-dark bg-inverse">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active">
              Popcorn Time
              <span className="sr-only">(current)</span>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
