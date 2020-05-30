import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../components/Sign-up/Sign-up.jsx';
import { fetchRegisterUser } from '../../actions/RegisterAction';


const mapDispatchToProps = (dispatch) => ({
  onRegister: bindActionCreators(fetchRegisterUser, dispatch)
});

const mapStateToProps = (state) => ({
  success: state.registerReducer.success,
  error: state.registerReducer.error,
  loading: state.registerReducer.loading,
  isAuth: state.registerReducer.isAuth
});

const RegisterService = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default RegisterService;
