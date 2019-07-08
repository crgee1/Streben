import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SaveRouteContainer from '../route/save_route_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { routeInfo } = this.props;
    // console.log(routeInfo)
    if (!this.props.modal) {
      return null;
    }

    switch (this.props.modal) {
      case 'saveRoute':
        this.component = <SaveRouteContainer routeInfo={routeInfo}/>;
        break;
      default:
        return null;
    }
    
  return (
    <div className="modal-background" onClick={this.props.closeModal}>
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
