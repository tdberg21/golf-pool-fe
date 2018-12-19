import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLogin(this.state.username, this.state.password)
    this.clearInputFields();
  }

  clearInputFields = () => {
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <div className='login-form-container'>
      <form className='login-form' onSubmit={(event) => this.handleSubmit(event)}>
        <label htmlFor='username' className='labels username-label'>Username:</label>
          <input type='text' className='inputs username-input' name='username' value={this.state.username} placeholder='Username' onChange={(event) => this.handleChange(event)}></input>
        <label htmlFor='password' className='labels password-label'>Password:</label>
        <input type='password' className='inputs password-input' name='password' value={this.state.password} placeholder='Password' onChange={(event) => this.handleChange(event)}></input>
        <button type='submit' className='buttons login-button'>Login</button>
      </form>
      </div>
    )
  }
}

export default LoginForm;