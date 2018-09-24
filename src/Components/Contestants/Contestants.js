import React from 'react';
import { Link } from 'react-router-dom';
import { contestants } from './ContestantsData';
import './Contestants.css';
import christy from '../../assets/christy.png';

const Contestants = (props) => {
  const contestantsToDisplay = contestants.map((player, index) => {
    return (
      <div className='contestants-card'>
        <Link to={`/contestants/${player.id}`} className='card-link'>
          <div value={player.id}>
            <h4 className='contestants-text contestant-name'>{player.name}</h4>
            <img src={player.image} className='contestant-image'/>
            <p className='contestants-text career-wins'>Career Wins: {player.career_wins}</p>
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