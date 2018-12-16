import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import ScheduleContainer from '../ScheduleContainer/ScheduleContainer';
import TournamentDetails from '../TournamentDetails/TournamentDetails';
import LoginForm from '../LoginForm/LoginForm';
import PlayerList from '../PlayerList/PlayerList';
import ContestantDetails from '../ContestantDetails/ContestantDetails.js';
import Draft from '../Draft/Draft';

import io from 'socket.io-client';
var socket = io.connect('http://localhost:3001');

socket.on('connect', () => {
  console.log('You have been connected!');
  socket.send({
    username: 'Bob Loblaw',
    text: 'Check out my law blog.'
  });
});

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
          <NavLink to='/' className='logo'> d.g.p. </NavLink>
          <div className='links-container'>
            <NavLink to='/draft' className='nav'> Draft </NavLink>
            <NavLink to='/tournaments' className='nav'> Tournaments </NavLink>
            <NavLink to='/players' className='nav'> Players </NavLink>
            <NavLink to='/login' className='nav'> Login </NavLink>
          </div>
        </header>
        <Route exact path='/' component={Home} />
        <Route exact path='/tournaments' component={ScheduleContainer} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/players' component={PlayerList} />
        <Route exact path='/draft' component={Draft} />
        <Route path='/tournaments/:id' render={({ match }) => {
          return <TournamentDetails id={match.params.id} />;
        }} />
        <Route path='/contestants/:id' render={({ match }) => {
          return <ContestantDetails id={match.params.id} />;
        }} />
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700" rel="stylesheet"></link>
      </div>
    );
  }
}

export default withRouter(App);

