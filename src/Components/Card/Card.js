import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='tournament-card' value={props.info.id}>
        <Link to={`/tournaments/${props.info.id}`} >
          <h3>{props.info.name}</h3>
          <p>{props.info.date}</p>
        </Link>
      </div>
    </div>
  )
}

export default Card;