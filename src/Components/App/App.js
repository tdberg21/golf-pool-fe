import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer';
import TournamentDetails from '../TournamentDetails/TournamentDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tournaments: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to='/' className='logo'> Fore! </NavLink>
          <div className='links-container'>
            <NavLink to='/tournaments' className='nav'> Tournaments </NavLink>
            <NavLink to='/players' className='nav'> Scoreboard </NavLink>
            <NavLink to='/login' className='nav'> Login </NavLink>
          </div>
        </header>
        <Route exact path='/' component={Home} />
        <Route exact path='/tournaments' component={ScheduleContainer} />
        <Route path='/tournaments/:id' render={({ match }) => {
          return <TournamentDetails id={match.params.id} />;
        }} />
      </div>
    );
  }
}

export default withRouter(App);

