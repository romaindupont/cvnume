import { connect } from 'react-redux';
// == Import : local
import Message from '../../../components/BoiteMail/Message';

const mapStateToProps = (state) => ({
	mail: state.Mail.mail,
	id: state.Mail.id
});

const mapDispatchToProps = {};


export default connect(mapStateToProps, mapDispatchToProps)(Message);