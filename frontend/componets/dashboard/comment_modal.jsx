import React from 'react';

class CommentModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { comments, liked, likes, handleDeleteComment } = this.props;
        const displayComments = comments.map(comment => {
            const deleteable = comment.userId === currentUser.id ? <i className="fas fa-times comment-delete" onClick={handleDeleteComment(comment.id)}></i> : null;

            return <div className="comments-item" key={comment.id}>
                <div className="comment-header">
                    <div className="comments-commenter">{comment.username}</div>
                    {deleteable}
                </div>
                <div className="comments-body">{comment.body}</div>
            </div>
        });

        return <div className="comment-modal">
            {displayComments}
        </div>
    }
}

export default CommentModal