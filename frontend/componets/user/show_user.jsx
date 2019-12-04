import React from 'react';
import ActivitiesFooter from '../footer/recent_activities_footer';
import LoadingIcon from '../loading/loading_icon';


class ShowUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            submitted: false,
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchUser(this.props.currentUser.id)
    }

    profilePic() {
        const { user } = this.props;

        return user.photoUrl ? <img className="profile-pic" src={user.photoUrl} /> :
            <section className="profile-pic blank">
                <h3 className="blank-pic">{user.username[0].toUpperCase()}</h3>
            </section> 
    }

    displayFileForm() {
        const { match, currentUser } = this.props;
        if (Number(match.params.userId) !== currentUser.id) return;

        return (
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="file" onChange={this.handleFile.bind(this)}/>
                <input type="submit" value="Update Profile"/>
            </form>
        </div>)

    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[photo]', this.state.photoFile);
        $.ajax({
            url: `/api/users/${this.props.currentUser.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then(res => this.setState({submitted: true}))
    }

    render() {
        const { loading, user, currentUser, routes, workouts, follows, recentWorkouts } = this.props;
        
        if (loading) return (
        <div className="profile-main">
            <div className="profile-container">
                <LoadingIcon/>
            </div>
            <ActivitiesFooter workouts={this.props.recentWorkouts} />
        </div>);

        let mainDisplay = !user ? null :
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-avatar">
                        {this.profilePic()}
                        <h1>{user.username}</h1>
                    </div>
                    {/* {this.displayFileForm()} */}
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
            </div>;
        
        return (
            <div className="profile-main">
                {mainDisplay}
                <ActivitiesFooter workouts={this.props.recentWorkouts} />
            </div>
        )
    }
}

export default ShowUser;