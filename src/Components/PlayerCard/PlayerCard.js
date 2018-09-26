import React from 'react';

const PlayerCard = props => {
  return(
    <div className={`player-info-card ${props.details.country.toLowerCase()}`}>
      <h6 className='player-name player-card-text'>{props.details.name}</h6>
      <p className='player-events player-card-text'>Rank: {props.details.rank}</p>
      <p className='player-events player-card-text'>Events: {props.details.events}</p>
    </div>
  )
}

export default PlayerCard;