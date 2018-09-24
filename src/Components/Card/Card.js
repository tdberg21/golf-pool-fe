import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
  return (
    <div className='tournament-card-container' value={props.info.id}>
      <Link to={`/tournaments/${props.info.id}`} className='card-link'>
        <div className='tournament-card' value={props.info.id}>
          <h3>{props.info.name}</h3>
          <p>{props.info.date}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card;