import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SaveRouteContainer from '../route/save_route_container';
import UpdateRouteContainer from '../route/update_route_container';
import DashboardModal from '../dashboard/dashboard_modal';


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { closeModal, routeInfo, prevRoute, prevLocations, comments, likes, liked, handleDeleteComment, currentUser, workout, createComment, turnOffModal, commentTab, handleButtonCreateLike, handleButtonDeleteLike } = this.props;
    if (!this.props.modal) {
      return null;
    }

    switch (this.props.modal) {
      case 'saveRoute':
        this.component = <SaveRouteContainer routeInfo={routeInfo}/>;
        break;
      case 'updateRoute':
        this.component= <UpdateRouteContainer routeInfo={routeInfo} prevRoute={prevRoute} prevLocations={prevLocations}/>;
        break;
      case 'commentModal':
        this.component = <DashboardModal comments={comments} likes={likes} liked={liked} handleDeleteComment={handleDeleteComment} currentUser={currentUser} workout={workout} createComment={createComment} turnOffModal={turnOffModal} commentTab={commentTab} handleButtonCreateLike={handleButtonCreateLike} handleButtonDeleteLike={handleButtonDeleteLike}/>;
        break;
      default:
        return null;
    }

    if (this.props.modal === 'commentModal') return (
      <div className="modal-background" onClick={turnOffModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {this.component}
        </div>
      </div>
    );
    
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { this.component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
