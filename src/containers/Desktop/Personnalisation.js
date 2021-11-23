import { connect } from 'react-redux';
// == Import : local
import { changeTheme } from '../../actions';
import Personnalisation from '../../components/Desktop/Personnalisation';


const mapStateToProps = (state) => ({
	theme: state.Dossier.theme

});

const mapDispatchToProps = (dispatch)=> ({
  changeTheme: (theme) => {
    dispatch(changeTheme(theme));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Personnalisation);