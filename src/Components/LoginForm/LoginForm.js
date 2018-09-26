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
        <label for='username' className='labels username-label'>Username:</label>
          <input type='text' className='inputs username-input' name='username' value={this.state.username} placeholder='username' onChange={(event) => this.handleChange(event)}></input>
        <label for='password' className='labels password-label'>Password:</label>
        <input type='password' className='inputs password-input' name='password' value={this.state.password} placeholder='password' onChange={(event) => this.handleChange(event)}></input>
        <button type='submit' className='buttons login-button'>Login</button>
      </form>
      </div>
    )
  }
}

export default LoginForm;