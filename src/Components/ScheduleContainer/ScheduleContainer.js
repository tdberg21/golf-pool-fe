import React, { Component } from 'react';
// import { fetchTournaments } from '../../helpers/apiCalls';
import { scrubTournaments } from '../../helpers/dataCleaners';
import Card from '../Card/Card';
import './ScheduleContainer.css';
import { schedule } from './ScheduleData';

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
    const cleanTourns = scrubTournaments(schedule.tournaments).reverse();
    console.log(cleanTourns[1])
    
    this.setState({
      tournaments: cleanTourns.splice(0, 12)
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