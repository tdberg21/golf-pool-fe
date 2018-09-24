import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { fetchTournaments } from '../../helpers/apiCalls'

class App extends Component {
  constructor() {
    super();

    this.state = {
      tournamentId: 0
    }
  }

  handleGetTournaments = async () => {
    console.log('click')
    // const tournamentsResponse = await fetchTournaments();
    // console.log(tournamentsResponse.tournaments[0]);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.handleGetTournaments}> Get Tournaments</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

