import React from 'react';
import IndexUserItem from './index_user_item';
import ActivitiesFooter from '../footer/recent_activities_footer';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      athletes: []
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts()
      .then(() => this.props.fetchUsers());
  }

  handleSearch() {
    this.setState({ searchKey: document.getElementById('athlete-search').value }, () => {
      const {searchKey} = this.state;
      if (searchKey === '') {
        this.setState({athletes: []});
      } else {
        let athletes = this.props.users.filter(user => 
          user.username.toLowerCase().includes(searchKey.toLowerCase()))
        this.setState({
          athletes
        });
      }
    });
  }

  updateSearchKey(e) {
    this.setState({searchKey: e.target.value});
  }

  render() {
    const { follows, currentUser, createFollow, deleteFollow } = this.props;
    const { searchKey, athletes } = this.state;
    const followsObject = {};
    follows.forEach(el => followsObject[el.userId] = el)
    const followees = follows.map(el => el.userId);
    let usersList = (athletes.length === 0 && searchKey !== '') ? <div className="no-athletes-found">No athletes with name <strong>{searchKey}</strong> found</div> : 
      this.state.athletes.map((user, i) => 
        <IndexUserItem
          currentUser={currentUser}
          user={user}
          followees={followees}
          follows={followsObject}
          createFollow={createFollow}
          deleteFollow={deleteFollow}
          key={i}
          i={i}
        />
    );
    return (
      <div>
        <div className='userIndex-main'>
          <header className='userIndex-header'>
            <h1>Athletes</h1>
          </header>
          <div className="searchbar" onSubmit={this.handleSearch}>
            <form>
              <input id="athlete-search" type="text" placeholder="Athlete Name"/> 
              <input type="submit" value="Search"/>
            </form>
          </div>
          {usersList}
        </div>
        <ActivitiesFooter workouts={this.props.recentWorkouts} />
      </div>
    )
  }
}

export default UsersIndex;
