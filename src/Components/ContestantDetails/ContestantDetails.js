import React from 'react';
import { Link } from 'react-router-dom';
import { contestants } from '../Contestants/ContestantsData';

const ContestantDetails = (props) => {
  const player = contestants.filter(player => {
    return player.id === parseInt(props.id)
  })
  console.log(player[0])
  return (
    <div className='contestant-details-container'>
      <div value={player[0].id}>
        <h4 className='contestant-name'>{player[0].name}</h4>
        <img src={player[0].image} className='contestant-image' alt={player[0].name} />
        <p className=''>Career Wins: {player[0].career_wins}</p>
        <p className=''>2018 Results</p>
        <p className=''>Masters: {player[0].masters}</p>
        <p className=''>US Open: {player[0].usOpen}</p>
        <p className=''>British Open: {player[0].british}</p>
        <p className=''>PGA Champ: {player[0].pgaChamp}</p>
      </div>
    </div>
  )
  
}

export default ContestantDetails;