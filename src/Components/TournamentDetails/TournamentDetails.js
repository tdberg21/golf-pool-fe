import React, { Component } from 'react';
import { fetchTournamentSummary } from '../../helpers/apiCalls';


class TournamentDetails extends Component {
  constructor() {
    super();

    this.state = {
      details: {}
    }
  }

  async componentDidMount() {
    const details = await fetchTournamentSummary(this.props.id);
    this.setState({
      details
    })
  }

  teamsToDisplay = () => {
    if (this.state.details.teams) {
      return this.state.details.teams.map(team => {
        return (
          <div>
            <h4>{team.name}</h4>
            <ul>
              {this.cardsToDisplay(team.members)}
            </ul>
          </div>
        )
      })
    }
  }

  cardsToDisplay = (members) => {
    return members.map(player => {
      return (
        <div>
          <h6>{player.first_name} {player.last_name}</h6>
          <h6>{player.country}</h6>
        </div>
      )
    })
  }

  render () {
    if(this.state.details && this.state.details.venue) {
      return (
        <div className='details-container'>
          <div>
            <h3>{this.state.details.name}</h3>
            <p>{this.state.details.venue.name}</p>
            <p>{this.state.details.start_date}</p>
            <div>
              {this.teamsToDisplay()}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading....
        </div>
      )
    }
  }
}

export default TournamentDetails;