import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../components/Pages/Auth/Auth';
import { authUser } from '../actions/authAction';

/**
 * Map dispatch function and pass in props component
 * @constant mapDispatchToProps
 * @param {function} dispacth
 */
const mapDispatchToProps = (dispacth) => ({
  actions: bindActionCreators(authUser, dispacth)
});

/**
 * Map the state and pass in props component
 * @constant mapStateToProps
 */
const mapStateToProps = (state) => state.isAuth;

/**
 * Authentification Service
 * @constant AuthService
 */
const AuthService = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthService;
