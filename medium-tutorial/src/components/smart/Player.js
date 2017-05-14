import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getPlayer } from '../../playerAPI.js';
import { playerSelected } from '../../actions/actionCreators.js';

class Player extends Component {
  componentDidMount() {
    this.props.onPlayerSelected(this.props.match.params.number);
  }

  render() {
    return (
      <div>
        {!_.isEmpty(this.props.selectedPlayer)
          ? <div>
              <h3>Number</h3> <p>{this.props.selectedPlayer.number}</p>
              <h3>Name</h3> <p>{this.props.selectedPlayer.name}</p>
              <h3>Position</h3> <p>{this.props.selectedPlayer.position}</p>
            </div>
          : <h3>No player found</h3>}
        <Link to="/roster">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedPlayer }) => {
  return {
    selectedPlayer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlayerSelected: player => {
      dispatch(playerSelected(player));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
