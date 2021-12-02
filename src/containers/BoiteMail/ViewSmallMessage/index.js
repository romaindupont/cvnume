import { connect } from 'react-redux';
// == Import : local
import ViewSmallMessage from '../../../components/BoiteMail/ViewSmallMessage';
import { chooseMessage } from '../../../actions/mail';

const mapStateToProps = (state) => ({
	mail: state.Mail.mail,
	category: state.Mail.category
});

/* const mapDispatchToProps = null; */
const mapDispatchToProps = (dispatch)=> ({
  chooseMessage: (id) => {
    dispatch(chooseMessage(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSmallMessage);