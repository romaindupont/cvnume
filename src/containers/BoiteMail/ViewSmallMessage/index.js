import { connect } from 'react-redux';
// == Import : local
import ViewSmallMessage from '../../../components/BoiteMail/ViewSmallMessage';


const mapStateToProps = (state) => ({
	mail: state.Mail.mail,
	category: state.Mail.category,

});

const mapDispatchToProps = null;
/* const mapDispatchToProps = (dispatch)=> ({
  closeMailPage: () => {
    dispatch(closeMailPage());
  },
  largeMailPage: () => {
    dispatch(largeMailPage());
  },
	smallMailPage: () => {
    dispatch(smallMailPage());
  }
  

}); */

export default connect(mapStateToProps, mapDispatchToProps)(ViewSmallMessage);