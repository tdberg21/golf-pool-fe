import React from 'react';
import { Link } from 'react-router-dom';
import { contestants } from './ContestantsData';
import './Contestants.css';

const Contestants = (props) => {
  const contestantsToDisplay = contestants.map((player, index) => {
    return (
      <div className='contestants-card' key={index}>
        <Link to={`/contestants/${player.id}`} className='card-link'>
          <div value={player.id}>
            <h4 className='contestants-text contestant-name'>{player.name}</h4>
            <img src={player.image} className='contestant-image' alt={player.name}/>
            <p className='contestants-text career-wins'>Career Wins: {player.career_wins}</p>
            <p className='contestants-text results'>2018 Results</p>
            <p className='contestants-text'>Masters: {player.masters}</p>
            <p className='contestants-text'>US Open: {player.usOpen}</p>
            <p className='contestants-text'>British Open: {player.british}</p>
            <p className='contestants-text'>PGA Champ: {player.pgaChamp}</p>
          </div>
        </Link>
      </div>
    )
  })
  return (
    <div className='contestants-container'>
      {contestantsToDisplay}
    </div>
  )
}

export default Contestants;