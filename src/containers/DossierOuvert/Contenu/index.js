import { connect } from 'react-redux';
// == Import : local
import Contenu from '../../../components/DossierOuvert/Contenu';
import { smallPage } from '../../../actions/internet';
import { smallMailPage } from '../../../actions/mail';
/* const mapStateToProps = (state) => ({
  openPageInternet: state.Internet.openPageInternet,

}); */
const mapStateToProps = null;
const mapDispatchToProps = (dispatch)=> ({
  smallPage: () => {
    dispatch(smallPage());
  },
  smallMailPage: () => {
    dispatch(smallMailPage());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Contenu);