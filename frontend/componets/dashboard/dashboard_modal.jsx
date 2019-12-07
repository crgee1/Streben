import React from 'react';
import CommentModalContainer from './comment_modal_container';
import LikeModal from './like_modal';

class DashboardModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: true,
        }
    }

    displayHeaders() {

        return (
            <ul className="dashboard-modal-headers">
                <li className={this.state.comment ? '' : 'active'} onClick={() => this.setState({ comment: false })}>Kudos </li>
                <li className={this.state.comment ? 'active' : ''} onClick={() => this.setState({ comment: true })}>Comments</li>
            </ul>
        )
    }

    render() {
        const { comments, likes, liked, handleDeleteComment, currentUser, workout, createComment } = this.props;

        const component = this.state.comment ? 
        <CommentModalContainer comments={comments} likes={likes} liked={liked} handleDeleteComment={handleDeleteComment} currentUser={currentUser} workout={workout} createComment={createComment} /> 
            : <LikeModal comments={comments} likes={likes} liked={liked} currentUser={currentUser} workout={workout} />;

        return (
            <div className="dashboard-modal">
                {this.displayHeaders()}
                {component}
            </div>
        )
    }
}

export default DashboardModal;