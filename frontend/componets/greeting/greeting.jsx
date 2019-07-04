import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const button = <button onClick={this.props.logout} >Logout</button>

        return ({button})
    }
}

export default Greeting