import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import io from 'socket.io-client';

let socket = io.connect('http://localhost:3001');

socket.on('connect', () => {
  console.log('You have been connected!');
  socket.send({
    username: 'Bob Loblaw',
    text: 'Check out my law blog.'
  });
});

class Draft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myId: null,
      golfers: [],
      players: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/api/v1/golfers')
    let golfers = await response.json();

    this.setState({ golfers });
  }

  render() {
    return (
      <div className="Draft">
        <h2>Draft</h2>
      </div>
    )
  }
}

export default Draft;