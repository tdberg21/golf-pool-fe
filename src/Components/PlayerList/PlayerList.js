import React, { Component } from 'react';
import { topPlayers } from '../../helpers/mockPlayerList';
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css';

class PlayerList extends Component {
  constructor() {
    super();

    this.state = {
      playerList: topPlayers
    }
  }

  displayCards = () => {
    let cardsToDisplay = this.state.playerList.map(player => {
      let details = {
        name: player.Name,
        rank: player.WorldGolfRank,
        id: player.PlayerID,
        events: player.Events,
        country: player.country || 'USA'
      }
      return <PlayerCard details={details} />
    })
    return cardsToDisplay;
  }

  render() {
    return(
      <div className='player-card-container'>
        {this.displayCards()}
      </div>
    )
  }
};

export default PlayerList;