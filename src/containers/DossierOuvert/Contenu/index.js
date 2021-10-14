import { connect } from 'react-redux';
// == Import : local
import Contenu from '../../../components/DossierOuvert/Contenu';
import { smallPage } from '../../../actions/internet';
/* const mapStateToProps = (state) => ({
  openPageInternet: state.Internet.openPageInternet,

}); */
const mapStateToProps = null;
const mapDispatchToProps = (dispatch)=> ({
  smallPage: () => {
    dispatch(smallPage());
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(Contenu);