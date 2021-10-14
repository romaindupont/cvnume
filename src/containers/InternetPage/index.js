import { connect } from 'react-redux';
// == Import : local
import InternetPage from '../../components/InternetPage';
import { closePage, largePage, smallPage } from '../../actions/internet';

const mapStateToProps = (state) => ({
  listDossier: state.Dossier.listDossier,
	id: state.Dossier.idName,
	openPageInternet: state.Internet.openPageInternet,

});

const mapDispatchToProps = (dispatch)=> ({
  closePage: () => {
    dispatch(closePage());
  },
  largePage: () => {
    dispatch(largePage());
  },
	smallPage: () => {
    dispatch(smallPage());
  }
  

});

export default connect(mapStateToProps, mapDispatchToProps)(InternetPage);