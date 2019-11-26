import React from 'react';

class CommentModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }

        this.updateComment = this.updateComment.bind(this);
        this.postComment = this.postComment.bind(this);
    }

    updateComment(e) {
        this.setState({ body: e.target.value });
    }

    postComment() {
        return (e) => {
            e.preventDefault();
            if (this.state.body === '') return;

            const { createComment, currentUser, workout } = this.props;
            createComment({ user_id: currentUser.id, workout_id: workout.id, body: this.state.body })
                .then((res) => this.setState({ post: false }));
        }
    }

    render() {
        const { comments, liked, likes, handleDeleteComment } = this.props;
        const displayComments = comments.map(comment => {
            const deleteable = comment.userId === currentUser.id ? <i className="fas fa-times comment-delete" onClick={handleDeleteComment(comment.id)}></i> : null;

            return <div className="comments-item modal-comment" key={comment.id}>
                <img className="comment-profile-pic big" src={comment.photoUrl} alt=""/>
                <section>
                    <div className="comment-header">
                        <div className="comments-commenter">{comment.username}</div>
                        {deleteable}
                    </div>
                    <div className="comments-body">{comment.body}</div>
                </section>
            </div>
        });

        return <div className="comment-modal">
            {displayComments}
            <div className="comment-create">
                <form className="comment-form">
                    <input className="comment-input" placeholder="Add a Comment..." type="text" onChange={this.updateComment} />
                    <button className={"post-button" + (this.state.body === "" ? " need-body" : "")} onClick={this.postComment()}>Post</button>
                </form>
            </div>
        </div>
    }
}

export default CommentModal