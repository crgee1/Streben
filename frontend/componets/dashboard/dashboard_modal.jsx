import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CommentModalContainer from './comment_modal';
import LikeModal from './like_modal';

class DashboardModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.commentTab,
        }
    }

    profilePic() {
        const { workout } = this.props;

        return workout.photoUrl ? <img className="comment-profile-pic big" src={workout.photoUrl} alt="" /> :
            <section className="comment-profile-pic blank">
                <h1 className="blank-pic">{workout.username[0].toUpperCase()}</h1>
            </section>
    }

    displayHeaders() {

        return (
            <ul className="dashboard-modal-headers">
                <li className={this.state.comment ? '' : 'active'} onClick={() => this.setState({ comment: false })}>Kudos </li>
                <li className={this.state.comment ? 'active' : ''} onClick={() => this.setState({ comment: true })}>Comments</li>
            </ul>
        )
    }

    exitModal() {
        const { turnOffModal, closeModal } = this.props;
        turnOffModal();
        closeModal();
    }

    render() {
        const { comments, likes, liked, handleDeleteComment, currentUser, workout, createComment, handleButtonDeleteLike, handleButtonCreateLike} = this.props;

        const component = this.state.comment ? 
            <CommentModalContainer comments={comments} likes={likes} liked={liked} handleDeleteComment={handleDeleteComment} currentUser={currentUser} workout={workout} createComment={createComment} /> 
            : <LikeModal comments={comments} likes={likes} liked={liked} currentUser={currentUser} workout={workout} handleButtonDeleteLike={handleButtonDeleteLike} handleButtonCreateLike={handleButtonCreateLike}/>;

        return (
            <div className="dashboard-modal">
                <div className="modal-header-title">
                    <section>
                        {this.profilePic()}
                        {workout.name}
                    </section>
                    <i className="fas fa-times" onClick={this.exitModal.bind(this)} />
                </div>
                <div className="dashboard-modal-headers-container">
                    {this.displayHeaders()}
                </div>
                {component}
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardModal);
