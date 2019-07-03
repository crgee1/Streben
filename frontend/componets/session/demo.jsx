import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.user.username,
            password: this.props.user.password,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitAction(this.state)
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
            <div >
                <div className='form-container'>
                    <h3 className='form-head'>{this.props.formType}</h3>
                    {this.renderErrors()}
                    <form>
                        <input
                            type="text"
                            value={this.props.user.username}
                            onChange={this.handleInput('username')}
                        />

                        <input
                            type="password"
                            value={this.props.user.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;
