import React, { Component } from 'react';
import { topPlayers } from '../../helpers/mockPlayerList';
import PlayerCard from '../PlayerCard/PlayerCard';
import './PlayerList.css';

class PlayerList extends Component {
  constructor() {
    super();

    this.state = {
      playerList: this.cleanData(topPlayers)
    }
  }

  cleanData = (array) => {
     return array.map(player => {
      let details = {
        name: player.Name,
        rank: player.WorldGolfRank,
        id: player.PlayerID,
        events: player.Events,
        country: player.country || 'USA'
      }
      return details;
    });
  };

  displayCardsTopTwenty = () => {
    let players = [...this.state.playerList];
    let shortList = players.splice(0, 18);
    let cardsToDisplay = shortList.map((player, index) => {
      return <PlayerCard details={player} key={index} />
    });
    return cardsToDisplay;
  };

  displayCardsSecondTwenty = () => {
    let players = [...this.state.playerList];
    let shortList = players.splice(18, 18);
    let cardsToDisplay = shortList.map((player, index) => {
      return <PlayerCard details={player} key={index} />
    });
    return cardsToDisplay;
  };

  displayCardsThirdTwenty = () => {
    let players = [...this.state.playerList];
    let shortList = players.splice(36, 18);
    let cardsToDisplay = shortList.map((player, index) => {
      return <PlayerCard details={player} key={index} />
    });
    return cardsToDisplay;
  };
  displayCardsFourthTwenty = () => {
    let players = [...this.state.playerList];
    let shortList = players.splice(54, 17);
    let cardsToDisplay = shortList.map((player, index) => {
      return <PlayerCard details={player} key={index} />
    });
    return cardsToDisplay;
  };

  displayCardsLastTwenty = () => {
    let players = [...this.state.playerList];
    let shortList = players.splice(71, 19);
    let cardsToDisplay = shortList.map((player, index) => {
      return <PlayerCard details={player} key={index} />
    });
    return cardsToDisplay;
  };

  render() {
    return(
      <div className='player-card-list-container'>
        <div className='player-parallax-text-sections top-section'>
          <h2 className='welcome-header parallax-headers'>Top 20 Players in the World.</h2>
        </div>
        <div className='player-list-parallax first-players-parallax player-card-container'>
          {this.displayCardsTopTwenty()} 
        </div>
        <div className='player-parallax-text-sections twenties-section'>
          <h2 className='welcome-header parallax-headers'>Players 21-40</h2>
        </div>
        <div className='player-list-parallax second-players-parallax player-card-container'>
          {this.displayCardsSecondTwenty()}   
        </div>
        <div className='player-parallax-text-sections fourties-section'>
          <h2 className='welcome-header parallax-headers'>Players 41-60</h2>
        </div>
        <div className='player-list-parallax third-players-parallax player-card-container'>
          {this.displayCardsThirdTwenty()}
        </div>
        <div className='player-parallax-text-sections sixties-section'>
          <h2 className='welcome-header parallax-headers'>Players 61-80</h2>
        </div>
        <div className='player-list-parallax fourth-players-parallax player-card-container'>
          {this.displayCardsFourthTwenty()}
        </div>
        <div className='player-parallax-text-sections twenties-section'>
          <h2 className='welcome-header parallax-headers'>Players 81-101</h2>
        </div>
        <div className='player-list-parallax fifth-players-parallax player-card-container'>
          {this.displayCardsLastTwenty()}
        </div>
      </div>
    )
  }
};

export default PlayerList;