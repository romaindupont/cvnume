import { connect } from 'react-redux';
// == Import : local
import NewTab from '../../components/InternetPage/NewTab';

const mapStateToProps = (state) => ({
  websitePage: state.Internet.websitePage

});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NewTab);