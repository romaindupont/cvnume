import { connect } from 'react-redux';
// == Import : local
import DossierOuvert from '../../components/DossierOuvert';


const mapStateToProps = (state) => ({
  listDossier: state.Dossier.listDossier,
	id: state.Dossier.idName,
	theme: state.Dossier.theme

});
const mapDispatchToProps = {};
/* const mapDispatchToProps = (dispatch)=> ({
  changeArticlesField: (newValue, name) => {
    dispatch(changeArticlesField(newValue, name));
  },
  sendArticleToBasket: (article_id, quantity) => {
    dispatch(sendArticleToBasket(article_id, quantity));
  }
  

}); */

export default connect(mapStateToProps, mapDispatchToProps)(DossierOuvert);