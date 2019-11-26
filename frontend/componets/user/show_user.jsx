import React from 'react';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        console.log(this.props.user)
        return (
            <div>

            </div>
        )
    }
}

export default ShowUser;