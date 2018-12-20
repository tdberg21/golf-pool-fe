import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import io from 'socket.io-client';
import './Draft.css';
import { fetchTournamentSummary } from '../../helpers/apiCalls.js';
import { mastersData } from '../../helpers/mastersData.js';

let socket = io.connect('http://localhost:3001');

socket.on('connect', () => {
  console.log('You have been connected!');

});

socket.on('error', function (err) {
  console.log('received socket error:')
  console.log(err)
})



class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDraft: false,
      myId: 'taco',
      golfers: [],
      players: [],
      tournament: {},
      chatText: '',
      chatHistory: []
    }
  }

  componentDidMount() {
    let tournament = {
      name: mastersData.name, id: mastersData.id, date: mastersData.start_date, venue: mastersData.venue.name
    }
    this.setState({ tournament });
    if (this.props.myId) {
      this.setState({ myId: this.props.myId})
    }

    socket.on('chatHistory', chatHistory => {
      let tester = chatHistory.map(i => {
        return i;
      })
      this.setState({ chatHistory })
    })

    socket.on('message', message => {
      let { chatHistory } = this.state;

      chatHistory.push(message);
      this.setState({ chatHistory });
    })

  }

  displayGolfers = () => {
    return this.state.golfers.map((golfer, index) => {
      return (
        <div 
          className={`golfer-draft-card ${golfer.country.toLowerCase()}`} 
          key={index} 
          onClick={() => this.handleDraftPlayer(golfer.api_id)}
        >
          <h4 className='golfer-draft-text'>{golfer.first_name} {golfer.last_name}</h4>
        </div>
      )
    })
  }

  displayTeam = () => {
    return this.state.players.map((golfer, index) => {
      console.log(golfer)
      return (
        <div 
          className={`golfer-draft-card ${golfer.country.toLowerCase()}`} 
          key={index}
        >
          <h4 className='golfer-draft-text'>{golfer.first_name} {golfer.last_name}</h4>
        </div>
      )
    })
  }

  activateDraft = async () => {
    const response = await fetch('http://localhost:3001/api/v1/golfers')
    let golfers = await response.json();

    this.setState({
      golfers,
      activeDraft: true
    });
  }

  handleDraftPlayer = async (golferId) => {
    if (this.state.activeDraft) {
      let draftedPlayer = this.state.golfers.filter(golfer => {
        return golfer.api_id === golferId
      });
      let undraftedPlayers = this.state.golfers.filter(golfer => {
        return golfer.api_id !== golferId
      });

      this.setState({ golfers: undraftedPlayers, players: [...draftedPlayer, ...this.state.players] })
    }
  }

  handleChatChange = (event) => {
    let chatText = event.target.value;

    this.setState({ chatText });
  }

  handleChatSubmit = (event) => {
    event.preventDefault();
    socket.send({
      username: this.state.myId,
      text: this.state.chatText
    })
    this.setState({chatText: ''})
  }

  chatBoxContent = () => {
    return this.state.chatHistory.map((message, i) => {
      return (
        <li className='chat-box-message' key={ Date.now() + i }>
          <span>{ message.username }: </span>
          <span>{ message.text }</span>
        </li>
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
              <p className='draft-tourn-details-text'>{this.state.tournament.venue}</p>
              <button 
                className='activate-draft-button'
                onClick={() => this.activateDraft()}
              > Activate Draft
              </button>
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
          <section className='chat-window'>
            <ul className='chat-feed'>
              { this.chatBoxContent() }
            </ul>
            <form className='chat-form' onSubmit={this.handleChatSubmit} >
              <input className='chat-input' value={this.state.chatText} onChange={this.handleChatChange}/>
              <button className='chat-submit-button'>Send</button>
            </form>
          </section>
        </div>
      )
    } 
  }
}

export default Draft;