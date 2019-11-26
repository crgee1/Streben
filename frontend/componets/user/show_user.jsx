import React from 'react';
import ActivitiesFooter from '../footer/recent_activities_footer';


class ShowUser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUser(this.props.currentUser.id)
    }

    render() {
        const { user, currentUser, routes, workouts, follows } = this.props;
        return (
            <div className="profile-main">
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <img className="profile-pic" src={user.photoUrl} alt=""/>
                            <h1>{user.username}</h1>
                        </div>
                    </div>
                    <div className="profile-body">
                        <h1 className="profile-stat-header">Totals</h1>
                        <div>
                            <ul className="profile-stat-list">
                                <li>
                                    Activities: {workouts.filter(el => el.userId === user.id).length}
                                </li>
                                <li>
                                    Routes: {routes.filter(el => el.userId === user.id).length}
                                </li>
                                <li>
                                    Followers: {follows.filter(el => el.userId === user.id).length}
                                </li>
                                <li>
                                    Following: {follows.filter(el => el.followerId === user.id).length}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ActivitiesFooter workouts={this.props.recentWorkouts} />
            </div>
        )
    }
}

export default ShowUser;