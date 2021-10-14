import { connect } from 'react-redux';
// == Import : local
import InternetLogo from '../../components/InternetLogo';
import { smallPage } from '../../actions/internet';

const mapStateToProps = (state) => ({
  openPageInternet: state.Internet.openPageInternet,

});

const mapDispatchToProps = (dispatch)=> ({
  smallPage: () => {
    dispatch(smallPage());
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(InternetLogo);