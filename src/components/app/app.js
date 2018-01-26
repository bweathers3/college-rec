import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions/action';
import main from '../../pages/main';
import '../styles/componentsStyles.css';

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    salesPointsHome: state.salesPointsHome,
    studentAthlete: state.studentAthlete,
    tabControl: state.tabControl
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(main);

export default App;
