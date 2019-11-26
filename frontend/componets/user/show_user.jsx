import React from 'react';

class ShowUser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        const { user, currentUser } = this.props;
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar">
                        <img className="profile-pic" src={user.photoUrl} alt=""/>
                        <h1>{user.username}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowUser;