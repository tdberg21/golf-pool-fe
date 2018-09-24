import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='parallax first-parallax'></div>
      <h1>Hello, friends!</h1>
      <p>Click on the tournament link above to start a draft</p>
      <div className='parallax second-parallax'></div>
      <h1>The Rules</h1>
      <p>The draft order is selected at random.</p>
      <p>Each team will alternate picks and draft players until each team has 5 players.</p>
      <p>Only 4 players on each team will count towards the final score.</p>
      <p>The team with the lowest cumulative score for their team is the winner.</p>
      <div className='parallax third-parallax'></div>
    </div>
  )
}

export default Home;