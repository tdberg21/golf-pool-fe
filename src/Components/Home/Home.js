import React from 'react';
import './Home.css';
import Contestants from '../Contestants/Contestants';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='parallax first-parallax'></div>
      <div className='parallax-text-sections welcome-section'>
        <h2 className='welcome-header parallax-headers'>Hello, Friends.</h2>
        <p></p>
      </div>
      <div className='parallax second-parallax'></div>
      <div className='parallax-text-sections rules-section'>
        <h2 className='parallax-headers'>The Rules</h2>
        <p>The draft order is selected at random.</p>
        <p>Each team will alternate picks and draft players until each team has 5 players.</p>
        <p>Only 4 players on each team will count towards the final score.</p>
        <p>The team with the lowest cumulative score is the winner.</p>
      </div>
      <div className='parallax third-parallax'></div>
      <div className='parallax-text-sections contestants-section'>
        <h2 className='parallax-headers'>The Contestants</h2>
        <Contestants />
      </div>
    </div>
  )
}

export default Home;