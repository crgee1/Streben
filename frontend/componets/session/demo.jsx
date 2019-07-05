/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleDemo();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDemo() {
    let i = 0;
    const user = ' username';
    const pword = ' password';
    const typeWriter = () => {
      if (i < user.length) {
        document.getElementById('username').value += user.charAt(i);
        document.getElementById('password').value += pword.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
    setTimeout(e => this.handleSubmit(e), 1000);
  }

  handleSubmit() {
    this.props.submitAction({ username: 'username', password: 'password' })
      .then(() => this.props.history.push('/dashboard'));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <h3 className="form-head">{this.props.formType}</h3>
          {this.renderErrors()}
          <form>
            <button className="facebook" onClick={this.facebookLogin}>Login In using Demo</button>
            <h3>Or Use The Demo</h3>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
              placeholder="Username"
            />

            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              placeholder="Password"
            />
            <button onClick={this.handleDemo}>{this.props.formType}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
