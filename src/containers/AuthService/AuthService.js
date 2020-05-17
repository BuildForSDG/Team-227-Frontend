import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../../components/Pages/Auth/Auth';
import { fetchAuthUser } from '../../actions/authAction';

/**
 * Map dispatch function and pass in props component
 * @func mapDispatchToProps
 * @param {func} dispacth
 */
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: bindActionCreators(fetchAuthUser, dispatch)
});

/**
 * Map the state and pass in props component
 * @func mapStateToProps
 * @param { Object } state
 * @returns Object
 */
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  loading: state.authReducer.loading,
  error: state.authReducer.error
});

/**
 * Authentification Service
 * @constant AuthService
 */
const AuthService = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default AuthService;
