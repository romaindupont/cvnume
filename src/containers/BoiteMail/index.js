import { connect } from 'react-redux';
// == Import : local
import BoiteMail from '../../components/BoiteMail';
import { closeMailPage, largeMailPage, smallMailPage } from '../../actions/mail';

const mapStateToProps = (state) => ({
	openPageMail: state.Mail.openPageMail
});

const mapDispatchToProps = (dispatch)=> ({
  closeMailPage: () => {
    dispatch(closeMailPage());
  },
  largeMailPage: () => {
    dispatch(largeMailPage());
  },
	smallMailPage: () => {
    dispatch(smallMailPage());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BoiteMail);