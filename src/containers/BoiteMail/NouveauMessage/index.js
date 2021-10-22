import { connect } from 'react-redux';
// == Import : local
import NouveauMessage from '../../../components/BoiteMail/NouveauMessage';
import { changeValue } from '../../../actions';
import { sendMessage } from '../../../actions/mail';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps)=> ({
  changeValue: (newValue) => {
    dispatch(changeValue(newValue, ownProps.name));
  },
	sendMessage: (id, prenom, nom, category, title, date, text, mail) => {
    dispatch(sendMessage(id, prenom, nom, category, title, date, text, mail));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NouveauMessage);