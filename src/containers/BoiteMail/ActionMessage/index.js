import { connect } from 'react-redux';
// == Import : local
import ActionMessage from '../../../components/BoiteMail/ActionMessage';
import { changeCategory } from '../../../actions/mail';

const mapStateToProps = (state) => ({
	category: state.Mail.category
});

const mapDispatchToProps = (dispatch)=> ({
  changeCategory: (category) => {
    dispatch(changeCategory(category));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionMessage);