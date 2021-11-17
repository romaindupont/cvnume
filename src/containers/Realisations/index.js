import { connect } from 'react-redux';
// == Import : local
import Realisations from '../../components/Realisations';
import { openWebsitePage } from '../../actions/internet';

const mapStateToProps = (state) => ({
  experiences: state.Xp.experiences,

});

const mapDispatchToProps = (dispatch)=> ({
  openWebsitePage: (url) => {
    dispatch(openWebsitePage(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Realisations);