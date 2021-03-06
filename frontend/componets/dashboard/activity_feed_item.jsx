import React from 'react';
import Modal from '../modal/modal';
import { Link } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: false,
      body: '',
      modal: false,
      commentTab: true,
    }
    this.handleButtonCreateLike = this.handleButtonCreateLike.bind(this);
    this.handleButtonDeleteLike = this.handleButtonDeleteLike.bind(this);
    this.postComment = this.postComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
  }
  
  handleButtonCreateLike() {
    let {createLike, currentUser, workout} = this.props;
    createLike({user_id: currentUser.id, workout_id: workout.id});
  }
  handleButtonDeleteLike() {
    this.props.deleteLike(this.props.likeId);
  }
  
  displayDate(inputDate) {
    let result = [];
    let date = new Date(...inputDate.split('-'));
    const days = {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday",
    };
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    result.push(`${months[date.getMonth()]} ${date.getDate()}`);
    result.push(date.getFullYear());
    return result.join(", ");
  }
  
  handleCreatePost() {
    this.setState({
      post: true
    });
  }

  postComment() {
    return (e) => {
      e.preventDefault();
      if (this.state.body === '') return;

      const { createComment, currentUser, workout } = this.props;
      createComment({user_id: currentUser.id, workout_id: workout.id, body: this.state.body})
        .then((res) => this.setState({post: false}));
    }
  }

  handleDeleteComment(commentId) {
    let { deleteComment } = this.props;
    return () => {
      deleteComment(commentId);
    }
  }
  
  displayComments() {
    const {comments, currentUser} = this.props;

    if (comments.length === 0) {
      return;
    } else {
      return comments.map(comment => {
        const deleteable = comment.userId === currentUser.id ? <i className="fas fa-times comment-delete" onClick={this.handleDeleteComment(comment.id)}></i> : null;
        
        return <div className="comments-item" key={comment.id}>
          {this.commentPic(comment)}
          <section>
            <div className="comment-header">
              <div className="comments-commenter">
                <Link className="profile-link" to={`/athletes/${comment.userId}`}>
                  {comment.username}
                </Link>
              </div>
              {deleteable}
            </div>
            <div className="comments-body">{comment.body}</div>
          </section>
    </div> }).slice(0,2);
    }
  }

  displayCommentInput() {
    if (this.state.post === false) return;

    return (
      <div className="comment-create">
        <form className="comment-form">
          <input className="comment-input" placeholder="Add a Comment..." type="text" onChange={this.updateComment}/>
          <button className={"post-button" + (this.state.body === "" ? " need-body" : "")} onClick={this.postComment()}>Post</button>
        </form>
      </div>
    )
  }

  updateComment(e) {
    this.setState({body: e.target.value});
  }

  commentModal() {
    const numComments = this.props.comments.length;

    return numComments <= 2 ? null :
      <div className="comment-modal-container">
        <a className="comment-modal-btn" 
          onClick={this.handleOpenModal(true)}
        >See all {numComments} comments</a>
      </div> 
  }

  handleOpenModal(bool) {
    return () => this.setState({ modal: true, commentTab: bool }, () => this.props.openModal('commentModal'));
    
  }

  turnOffModal() {
    this.setState({modal: false});
  }

  openedCommentModal() {
    let { comments, liked, likes, currentUser, workout, createComment } = this.props;

    return this.state.modal === false ? null : 
    <Modal 
      comments={comments} 
      likes={likes} 
      liked={liked} 
      handleDeleteComment={this.handleDeleteComment}
      currentUser={currentUser}
      workout={workout}
      createComment={createComment}
      turnOffModal={this.turnOffModal.bind(this)}
      commentTab={this.state.commentTab}
      handleButtonCreateLike={this.handleButtonCreateLike}
      handleButtonDeleteLike={this.handleButtonDeleteLike}
    />
  }

  profilePic() {
    const { user } = this.props;

    return user.photoUrl ? <img className="avatar-image-mini" src={user.photoUrl}/> :
      <section className="avatar-image-mini">
        <h1>{user.username[0]}</h1>
      </section>
  }

  kudoPic(user) {
    return (user.photoUrl) ? 
      <img className="kudos-profile-pic" src={user.photoUrl} alt="" /> :
      <section className="kudos-profile-pic blank">
        <h1 className="blank-pic">{user.username[0].toUpperCase()}</h1>
      </section>
  }

  commentPic(user) {
    return (user.photoUrl) ? 
      <img className="comment-profile-pic" src={user.photoUrl} alt="" /> :
      <div className="comment-profile-pic blank">
        <h1 className="blank-pic">{user.username[0].toUpperCase()}</h1>
      </div>
  }

  displayKudosPics() {
    const { likes } = this.props;

    const pic1 = !likes[0] ? null : this.kudoPic(likes[0])
    const pic2 = !likes[1] ? null : this.kudoPic(likes[1])
    const pic3 = !likes[2] ? null : this.kudoPic(likes[2])

    return (
      <div>
        {pic1}
        {pic2}
        {pic3}
      </div>
    )
  }

  render() {
    const { distance, elevation, duration, description, name, id, createDate } = this.props.workout;
    const { user, likes, liked, comments } = this.props;
    
    const kudosSection = likes.length > 0 ? 
    <div className="kudos-count">
      {this.displayKudosPics()}
      <a className="comment-modal-btn" onClick={this.handleOpenModal(false)}>
        {likes.length} kudos 
      </a>
        · 
      <a className="comment-modal-btn" onClick={this.handleOpenModal(true)}>
          {` ${comments.length}`} comments
      </a>
    </div> : 
    <div className="kudos-count">
      Be the first to give kudos! · 
      <a className="comment-modal-btn" onClick={this.handleOpenModal(true)}>
        {` ${comments.length}`} comments
      </a>
    </div>
    
    const likeButton = liked ? <button className="feedback-button like-button" onClick={this.handleButtonDeleteLike}>
      <i className="fas fa-thumbs-up"></i>
    </button> : 
      <button className="feedback-button like-button" onClick={this.handleButtonCreateLike}>
        <i className="far fa-thumbs-up"></i>
      </button>;
    
    return (
      <div className="activity-feed-item">
        {this.openedCommentModal()}
        <div className="activity-info">
          {this.profilePic()}
          <section>
            <header className="feed-item-header">
                <h2>
                  <Link className="profile-link" to={`/athletes/${user.id}`}>
                    {user.username}
                  </Link>
                </h2>
              <label>{this.displayDate(createDate)}</label>
            </header>
            <div className="feed-item-name">
              <Link className="training-link" to={`training/${id}`}>{name}</Link>
            </div>
            <div className="feed-item-desc">
              <p>{description}</p>
            </div>
            <div className="feed-item-stats">
              <section>
                <label>Distance</label>
                <h3>{distance} mi</h3>
              </section>
              <section>
                <label>Elevation</label>
                <h3>{elevation} ft</h3>
              </section>
              <section>
                <label>Time</label>
                <h3>{this.displayTime(duration)}</h3>
              </section>
            </div>
          </section>
        </div>
        <div className="user-feedback">
          <div className="kudos-section">
            {kudosSection}
            <div className="user-feedback-buttons">
              {likeButton}
              <button className="feedback-button comment-button" onClick={() => this.handleCreatePost()}>
                <i className="far fa-comment"></i>
              </button>
            </div>
          </div>
          <div className="comment-section">
            {this.displayComments()}
            {this.commentModal()}
            {this.displayCommentInput()}
          </div>
        </div>
      </div>
    )
  }
}

export default ActivityFeedItem;
