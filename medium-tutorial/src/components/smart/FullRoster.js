import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getAllPlayers } from '../../playerAPI.js';
import {
  isFetching,
  fetchSuccess,
  fetchFail,
  fetchComplete,
  clearSelection,
} from '../../actions/actionCreators.js';

class FullRoster extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.players)) {
      this.props.onIsFetching();
      getAllPlayers()
        .then(data => this.props.onFetchSuccess(data))
        .catch(error => {
          alert('Error');
          this.props.onFetchFail(new Error(error));
        })
        .then(() => this.props.onFetchComplete());
    } else this.props.onClearSelection();
  }

  render() {
    return (
      <div>
        <ul>
          {!_.isEmpty(this.props.players)
            ? this.props.players.map((player, index) => (
                <li key={index}>
                  <Link to={`/roster/${player.number}`}>{player.name}</Link>
                </li>
              ))
            : <li>Loading</li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ players, isFetching }) => ({
  players,
  isFetching,
});

const mapDispatchToProps = dispatch => ({
  onIsFetching: () => {
    dispatch(isFetching());
  },
  onFetchSuccess: players => {
    dispatch(fetchSuccess(players));
  },
  onFetchFail: error => {
    dispatch(fetchFail(error));
  },
  onFetchComplete: () => {
    dispatch(fetchComplete());
  },
  onClearSelection: () => {
    dispatch(clearSelection());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FullRoster);
