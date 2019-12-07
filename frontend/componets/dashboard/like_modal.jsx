import React from 'react';
import { connect } from 'react-redux';

class LikeModal extends React.Component {
    constructor(props) {
        super(props);
    }

    profilePic(like) {

        return like.photoUrl ? <img className="comment-profile-pic big" src={like.photoUrl} alt="" /> :
            <section className="comment-profile-pic blank">
                <h1 className="blank-pic">{like.username[0].toUpperCase()}</h1>
            </section>
    }

    render() {
        const { comments, liked, likes, currentUser, handleButtonCreateLike, handleButtonDeleteLike } = this.props;
        
        const displayLikes = likes.map(like => {
            return <div className="comments-item modal-comment like-item" key={like.id}>
                {this.profilePic(like)}
                <section>
                    <div className="comment-header">
                        <div className="comments-commenter">{like.username}</div>
                    </div>
                </section>
            </div>
        });

        const likeButton = liked ? <button className="feedback-button like-button" onClick={handleButtonDeleteLike}>
            <i className="fas fa-thumbs-up"></i>
        </button> :
            <button className="feedback-button like-button" onClick={handleButtonCreateLike}>
                <i className="far fa-thumbs-up"></i>
            </button>;

        return (
        <div className="comment-modal">
            {displayLikes}
            <div className="like-create">
                {likeButton}
            </div>
        </div>)
    }
}

export default LikeModal