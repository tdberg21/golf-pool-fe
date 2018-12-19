import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import io from 'socket.io-client';
import './Draft.css';
import { fetchTournamentSummary } from '../../helpers/apiCalls.js';

let socket = io.connect('http://localhost:3001');

socket.on('connect', () => {
  console.log('You have been connected!');
  socket.send({
    username: 'Big Dick Eldrick Woods',
    text: 'Time to eat boys'
  });
});

class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myId: 'taco',
      golfers: [],
      players: [],
      tournament: {}
    }
  }

  async componentDidMount() {
    if (this.props.myId) {
      this.setState({myId: this.props.myId})
    }
    const response = await fetch('http://localhost:3001/api/v1/golfers')
    let golfers = await response.json();
    let tournament = {
      name: await golfers[0].tournament, id: await golfers[0].tournament_id}

    this.setState({ 
      golfers,
      tournament
     });
  }

  displayGolfers = () => {
    return this.state.golfers.map((golfer, index) => {
      return (
        <div className='draft-golfer-card'>
          <h4 className={`golfer-draft-card ${golfer.country.toLowerCase()}`}>{golfer.first_name} {golfer.last_name}</h4>
        </div>
      )
    })
  }

  displayTeam = () => {
    return this.state.players.map((golfer, index) => {
      return (
        <div className='draft-golfer-card'>
          <h4 className={`golfer-draft-card ${golfer.country.toLowerCase()}`}>{golfer.first_name} {golfer.last_name}</h4>
        </div>
      )
    })
  }

  render() {
    if (!this.state.myId) {
      return (
        <div className='Draft'>
        Please login
        </div>
      )
    } else {
      return (
        <div className="Draft">
          <section className='top-section draft-sections'>
            <div className='draft-tourn-details-container draft-containers'>
              Current Tournament details...
            <h2 className='draft-tourn-details-text'>{this.state.tournament.name}</h2>
            </div>
            <div className='draft-order-container draft-containers'>
              List Draft order for current draft...
            </div>
          </section>
          <section className='bottom-section draft-sections'>
            <div className='undrafted-players-container draft-containers'>
            Available Players
              {this.displayGolfers()}
            </div>
            <div className='drafted-players-container draft-containers'>
            My Team
              {this.displayTeam()}
            </div>
          </section>
        </div>
      )
    } 
  }
}

export default Draft;