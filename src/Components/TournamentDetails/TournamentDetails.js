import React, { Component } from 'react';
import { fetchTournamentSummary } from '../../helpers/apiCalls';
import './TournamentDetails.css';


class TournamentDetails extends Component {
  constructor() {
    super();

    this.state = {
      details: {}
    }
  }

  async componentDidMount() {
    // const details = await fetchTournamentSummary(this.props.id);
    this.setState({
      details: {}
    })
  }

  teamsToDisplay = () => {
    if (this.state.details.teams) {
      return this.state.details.teams.map(team => {
        return (
          <div className='team-container'>
            <h4>{team.name}</h4>
            <div className='player-container'>
              {this.cardsToDisplay(team.members)}
            </div>
          </div>
        )
      })
    }
  }

  cardsToDisplay = (members) => {
    return members.map(player => {
      return (
        <div className='player-card {player.id}'>
          <h6 className={player.id}>{player.first_name} {player.last_name}</h6>
          <p>{player.country}</p>
          <p>{player.role}</p>
        </div>
      )
    })
  }

  displayField = () => {
    return this.state.details.field.map(player => {
      return (
        <div className='field-player-card'>
          <h4>{player.first_name} {player.last_name}</h4>
          <p>{this.titleCase(player.country)}</p>
        </div>
      )
    })
  }

  titleCase = (input) => {
    return input.toLowerCase().split(' ').map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  render () {
    if(this.state.details && this.state.details.venue && this.state.details.teams) {
      return (
        <div className='details-container'>
          <div className='tournament-info-container'>
            <h3 className='tournament-header'>{this.state.details.name}</h3>
            <p>{this.state.details.venue.name}</p>
            <p>{this.state.details.start_date}</p>
          </div>
            <div className='teams-container'>
              {this.teamsToDisplay() || this.displayField()}
            </div>
        </div>
      )
    } else if (this.state.details && this.state.details.venue && this.state.details.field){
      return (
        <div className='details-container'>
          <div className='tournament-info-container'>
            <h3 className='tournament-header'>{this.state.details.name}</h3>
            <p>{this.state.details.venue.name}</p>
            <p>{this.state.details.start_date}</p>
          </div>
          <div className='field-list-container'>
            {this.displayField()}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {}
        </div>
      )
    }
  }
}

export default TournamentDetails;