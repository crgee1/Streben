import { connect } from 'react-redux';
import ShowUser from './show_user';
import { fetchUsers, } from '../../actions/user_actions';
import { fetchWorkouts, } from '../../actions/workout_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStatetoProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowUser);
