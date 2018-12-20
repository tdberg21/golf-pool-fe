import React, { Component } from 'react';
// import { fetchTournaments } from '../../helpers/apiCalls';
import { scrubTournaments } from '../../helpers/dataCleaners';
import Card from '../Card/Card';
import './ScheduleContainer.css';
import { majors } from './ScheduleData';

class ScheduleContainer extends Component {
  constructor() {
    super();

    this.state = {
      tournaments: []
    }
  }

  componentDidMount() {
    this.handleGetTournaments();
  }

  handleGetTournaments = async () => {
    // const tournamentsResponse = await fetchTournaments();
    const cleanTourns = scrubTournaments(majors);
    
    this.setState({
      tournaments: cleanTourns
    });
  }

  tournamentsToDisplay = () => {
    let cards =[];
    if(this.state.tournaments.length) {
      cards = this.state.tournaments.map((tourn, index) => <Card info={tourn} key={index}/>)
    }
    return cards;
  }


  render() {
    if (!this.state.tournaments.length) {
      return (
        <div className='schedule-loading'>Loading...</div>
      )
    } else {
      return (
        <div className='schedule-container'>
          {this.tournamentsToDisplay()}
        </div>
      )
    }
  }
}

export default ScheduleContainer;