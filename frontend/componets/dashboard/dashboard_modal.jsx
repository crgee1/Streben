import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
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
        const { comments, likes, liked, handleDeleteComment, currentUser, workout, createComment, closeModal} = this.props;

        const component = this.state.comment ? 
        <CommentModalContainer comments={comments} likes={likes} liked={liked} handleDeleteComment={handleDeleteComment} currentUser={currentUser} workout={workout} createComment={createComment} /> 
            : <LikeModal comments={comments} likes={likes} liked={liked} currentUser={currentUser} workout={workout} />;

        return (
            <div className="dashboard-modal">
                <div className="dashboard-modal-headers-container">
                    {this.displayHeaders()}
                    <i className="fas fa-times" onClick={() => closeModal()}/>
                </div>
                {component}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardModal);
