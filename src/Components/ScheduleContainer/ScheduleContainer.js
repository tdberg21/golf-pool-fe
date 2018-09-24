import React, { Component } from 'react';
import { fetchTournaments } from '../../helpers/apiCalls';
import { scrubTournaments } from '../../helpers/dataCleaners';
import Card from '../Card/Card';
import './ScheduleContainer.css';

class ScheduleContainer extends Component {
  constructor() {
    super();

    this.state = {
      tournamentId: 0,
      tournaments: []
    }
  }

  componentDidMount() {
    this.handleGetTournaments();
  }

  handleGetTournaments = async () => {
    const tournamentsResponse = await fetchTournaments();
    const cleanTourns = scrubTournaments(tournamentsResponse.tournaments);
    this.setState({
      tournaments: cleanTourns
    });
  }

  tournamentsToDisplay = () => {
    let cards =[];
    if(this.state.tournaments.length) {
      cards = this.state.tournaments.map((tourn, index) => <Card info={tourn} index={index}/>)
    }
    return cards.reverse();
  }


  render() {
    return (
      <div className='schedule-container'>
        {this.tournamentsToDisplay()}
      </div>
    )
  }
}

export default ScheduleContainer;