import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      password: ''
    }
  }


  render() {
    return (
      <div className='login-form-container'>
      Please login!
      </div>
    )
  }
}

export default LoginForm;